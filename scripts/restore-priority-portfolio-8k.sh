#!/usr/bin/env bash
set -euo pipefail

# Produce non-destructive 8K-class archival derivatives for three weak legacy
# photographs. The earliest committed AVIF renditions remain the reproducible
# source; existing site assets are never overwritten.
#
# RealESRGAN x4plus is a GAN super-resolution model. It reconstructs plausible
# high-frequency detail rather than recovering forensic ground truth. Outputs
# must retain the disclosure recorded in restoration-priority-portfolio-8k.json.

source_commit="46b3c7c"
kube_namespace="${KUBE_NAMESPACE:-gpu-inference}"
output_root="src/assets/portfolio/restored"
work_root=$(mktemp -d /tmp/hardmagic-portfolio-8k.XXXXXX)
local_port="${REALESRGAN_LOCAL_PORT:-18082}"
port_forward_pid=""
cleanup() {
  [[ -z "$port_forward_pid" ]] || kill "$port_forward_pid" 2>/dev/null || true
  rm -rf -- "$work_root"
}
trap cleanup EXIT

for command in git kubectl magick avifenc identify curl python; do
  command -v "$command" >/dev/null || { echo "Missing required command: $command" >&2; exit 1; }
done

git cat-file -e "${source_commit}^{commit}"
mkdir -p "$output_root"

inference_pod=$(kubectl -n "$kube_namespace" get pod \
  -l hardmagic.ai/model-id=realesrgan_x4 \
  -o jsonpath='{.items[0].metadata.name}')
[[ -n "$inference_pod" ]] || { echo "RealESRGAN inference pod not found" >&2; exit 1; }

kubectl -n "$kube_namespace" port-forward \
  service/inference-realesrgan-x4 "${local_port}:8000" \
  >"$work_root/port-forward.log" 2>&1 &
port_forward_pid=$!
for _ in {1..30}; do
  curl --fail --silent "http://127.0.0.1:${local_port}/health" >/dev/null && break
  sleep 1
done
curl --fail --silent "http://127.0.0.1:${local_port}/health" >/dev/null || {
  cat "$work_root/port-forward.log" >&2
  exit 1
}

restore() {
  local asset=$1
  local source_path="src/assets/portfolio/${asset}.avif"
  local source_avif="$work_root/${asset}-source.avif"
  local inference_png="$work_root/${asset}-inference.png"
  local restored_png="$work_root/${asset}-realesrgan-x4.png"
  local master_png="$work_root/${asset}-8k-master.png"
  local output_avif="$output_root/${asset}-8k-restored.avif"

  if [[ -e "$output_avif" ]]; then
    echo "Keeping completed master: $output_avif"
    return
  fi

  echo "Restoring $asset from $source_commit:$source_path"
  git show "${source_commit}:${source_path}" > "$source_avif"

  # Decode once to a lossless, full-resolution, 16-bit sRGB transport image.
  # No denoising, recoloring, cropping, face repair, or diffusion is applied.
  # Keep enough native information for reconstruction while bounding the API
  # request to a geometry the shared GPU lane can process reliably.
  magick "$source_avif" -colorspace sRGB -alpha off -depth 16 \
    -resize '1200x1200>' "$inference_png"

  python - "$inference_png" "$restored_png" "$local_port" <<'PY'
import base64
import io
import json
import sys

import requests
from PIL import Image

source, destination, port = sys.argv[1:4]
response = None
for attempt in range(3):
    with open(source, "rb") as handle:
        response = requests.post(
            f"http://127.0.0.1:{port}/v1/images/edits",
            files={"file": ("source.png", handle, "image/png")},
            data={"scale": 4},
            timeout=1800,
        )
    if response.ok:
        break
    if attempt == 2:
        response.raise_for_status()
assert response is not None
payload = response.json()
image = Image.open(io.BytesIO(base64.b64decode(payload["image_base64"]))).convert("RGB")
image.save(destination, format="PNG", compress_level=1)
print(json.dumps({key: payload[key] for key in (
    "model", "original_size", "output_size", "scale", "processing_time_seconds"
)}))
PY

  # RealESRGAN supplies the reconstruction. Lanczos only brings the long edge
  # to the 8K-class archival target; restrained unsharp compensates for that
  # final resample without changing geometry or global color.
  magick "$restored_png" \
    -filter Lanczos -resize '7680x7680' \
    -unsharp '0x0.45+0.35+0.02' \
    -colorspace sRGB -depth 16 "$master_png"

  avifenc --depth 10 --yuv 444 --qcolor 92 --speed 4 --jobs all \
    --ignore-exif --ignore-xmp "$master_png" "$output_avif"
  identify "$output_avif"
}

restore airikai-editorial
restore fashionx-editorial
restore state-parks-sunset

echo "Created three non-destructive masters in $output_root"
