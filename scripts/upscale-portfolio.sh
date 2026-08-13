#!/usr/bin/env bash
set -euo pipefail

# Regenerate the photographic portfolio renditions from the largest surviving
# source files with HardMagic's RealESRGAN x4plus inference service. The service
# performs the restoration pass; ImageMagick only constrains oversized results
# and encodes the site-ready AVIF rendition.

if [[ $# -lt 1 || $# -gt 2 ]]; then
  echo "usage: $0 <recovered-wordpress-root> [kubernetes-namespace]" >&2
  exit 2
fi

source_root=$1
kube_namespace=${2:-gpu-inference}
output_root="src/assets/portfolio"
work_root=$(mktemp -d /tmp/hardmagic-upscale.XXXXXX)
trap 'rm -rf -- "$work_root"' EXIT
inference_pod=$(kubectl -n "$kube_namespace" get pod -l hardmagic.ai/model-id=realesrgan_x4 -o jsonpath='{.items[0].metadata.name}')

upscale() {
  local source_rel=$1
  local destination=$2
  local scale=$3
  local restored="$work_root/${destination%.avif}.webp"
  local inference_input="$work_root/${destination%.avif}-input.png"
  local remote_input="/tmp/hardmagic-${destination%.avif}-input.png"
  local remote_output="/tmp/hardmagic-${destination%.avif}-output.webp"

  if [[ -f "$output_root/$destination" ]] && (( $(identify -format '%w' "$output_root/$destination") >= 3000 || $(identify -format '%h' "$output_root/$destination") >= 3000 )); then
    echo "Keeping completed restoration $destination"
    return
  fi

  echo "Restoring $destination from $source_rel at ${scale}x"
  # The current inference deployment has a deliberately small 2 GiB GPU slice.
  # Normalize only the inference copy to a 1024 px long edge so the x4 model can
  # complete deterministically; the untouched surviving master remains in Git.
  magick "${source_root}/${source_rel}" -resize '1024x1024>' "$inference_input"
  kubectl -n "$kube_namespace" cp "$inference_input" "$inference_pod:$remote_input" -c inference
  kubectl -n "$kube_namespace" exec -i "$inference_pod" -c inference -- \
    python - "$remote_input" "$remote_output" "$scale" <<'PY'
import base64
import io
import json
import sys

import requests
from PIL import Image

source, destination, scale = sys.argv[1], sys.argv[2], sys.argv[3]
with open(source, 'rb') as handle:
    response = requests.post(
        'http://127.0.0.1:8000/v1/images/edits',
        files={'file': ('input.png', handle, 'image/png')},
        data={'scale': scale},
        timeout=900,
    )
response.raise_for_status()
payload = response.json()
image = Image.open(io.BytesIO(base64.b64decode(payload['image_base64']))).convert('RGB')
image.thumbnail((3840, 3840), Image.Resampling.LANCZOS)
image.save(destination, format='WEBP', quality=78, method=1)
print(json.dumps({key: payload[key] for key in ('model', 'original_size', 'output_size', 'scale', 'processing_time_seconds')}))
PY
  set +e
  kubectl -n "$kube_namespace" exec "$inference_pod" -c inference -- base64 "$remote_output" | base64 --decode > "$restored"
  set -e
  identify "$restored" >/dev/null
  kubectl -n "$kube_namespace" exec "$inference_pod" -c inference -- rm -f -- "$remote_input" "$remote_output"
  magick "$restored" -resize '4096x4096>' -define heic:speed=7 -quality 76 "$output_root/$destination"
}

upscale '2017/08/tango_cover.jpg' 'airikai-editorial.avif' 4
upscale '2017/08/keani_kick.jpg' 'airikai-motion.avif' 4
upscale '2017/08/5.jpg' 'airikai-portrait.avif' 4
upscale '2014/12/emilie_maxim.jpg' 'fashionx-editorial.avif' 4
upscale '2014/10/swimsuit.jpg' 'fashionx-swim.avif' 4
upscale '2014/12/behind_scene2.jpg' 'fashionx-process.avif' 4
upscale '2014/10/sunset_slider-1024x421.jpg' 'state-parks-sunset.avif' 4
upscale '2017/12/12291909_10208085994686820_996826335534502919_o.jpg' 'state-parks-wildlife.avif' 4
upscale '2017/12/IMG_3104_1920-1-1024x576.jpg' 'state-parks-landscape.avif' 4
upscale '2017/12/Autumn.jpg' 'tao-cottage-autumn.avif' 4
upscale '2017/12/night_snow_1920.jpg' 'tao-cottage-night.avif' 4
upscale '2017/12/room.jpg' 'tao-cottage-room.avif' 4
upscale '2017/12/taolo_building-1024x768-1.jpg' 'taolo-building.avif' 4
upscale '2018/01/beaker.jpg' 'taolo-object.avif' 4
upscale '2018/01/cherry_kombucha2-770-1024x797.jpg' 'taolo-kombucha.avif' 4
