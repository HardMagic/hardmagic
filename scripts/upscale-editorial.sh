#!/usr/bin/env bash
set -euo pipefail

kube_namespace=${1:-gpu-inference}
work_root=$(mktemp -d /tmp/hardmagic-editorial-upscale.XXXXXX)
trap 'rm -rf -- "$work_root"' EXIT
inference_pod=$(kubectl -n "$kube_namespace" get pod -l hardmagic.ai/model-id=realesrgan_x4 -o jsonpath='{.items[0].metadata.name}')

restore() {
  local source=$1
  local destination=$2
  local stem
  stem=$(basename "${destination%.*}")
  local inference_input="$work_root/${stem}-input.png"
  local restored="$work_root/${stem}.webp"
  local remote_input="/tmp/hardmagic-${stem}-input.png"
  local remote_output="/tmp/hardmagic-${stem}-output.webp"

  if [[ -f "$destination" ]] && (( $(identify -format '%w' "$destination") >= 3500 )); then
    echo "Keeping completed restoration $destination"
    return
  fi

  echo "Restoring $destination"
  magick "$source" -resize '1024x1024' "$inference_input"
  kubectl -n "$kube_namespace" cp "$inference_input" "$inference_pod:$remote_input" -c inference
  kubectl -n "$kube_namespace" exec -i "$inference_pod" -c inference -- \
    python - "$remote_input" "$remote_output" <<'PY'
import base64
import io
import json
import sys

import requests
from PIL import Image

source, destination = sys.argv[1], sys.argv[2]
with open(source, 'rb') as handle:
    response = requests.post(
        'http://127.0.0.1:8000/v1/images/edits',
        files={'file': ('input.png', handle, 'image/png')},
        data={'scale': '4'},
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
  magick "$restored" -resize '3840x3840>' -define heic:speed=7 -quality 78 "$destination"
}

restore 'src/assets/editorial/generative-operations.png' 'src/assets/editorial/generative-operations-4k.avif'
restore 'src/assets/editorial/dream-media-specimen.png' 'src/assets/editorial/dream-media-specimen-4k.avif'
restore 'src/assets/editorial/media-alchemy-ritual.avif' 'src/assets/editorial/media-alchemy-ritual-4k.avif'
restore 'src/assets/editorial/audience-dreamfield-2035.avif' 'src/assets/editorial/audience-dreamfield-2035-4k.avif'
