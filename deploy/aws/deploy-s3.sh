#!/usr/bin/env bash
# Puja dist/ a un bucket S3 servit per CloudFront, amb les capçaleres de memòria cau
# adequades per a cada tipus de fitxer, i invalida la memòria cau de CloudFront.
#
#   BUCKET=campus-web DISTRIBUTION_ID=E123ABC ./deploy/aws/deploy-s3.sh
#
# Cal tenir l'AWS CLI configurat (aws configure) amb permisos sobre el bucket i la distribució.
set -euo pipefail
: "${BUCKET:?Defineix BUCKET}"
: "${DISTRIBUTION_ID:?Defineix DISTRIBUTION_ID}"

npm run build

# fitxers amb hash: un any
aws s3 sync dist/assets "s3://$BUCKET/assets" --delete \
  --cache-control "public, max-age=31536000, immutable"
# compilador de C++: un mes
aws s3 sync dist/clang "s3://$BUCKET/clang" --delete \
  --cache-control "public, max-age=2592000"
# la resta (index.html, workers, favicon…): sempre es revalida
aws s3 sync dist "s3://$BUCKET" --delete \
  --exclude "assets/*" --exclude "clang/*" \
  --cache-control "no-cache"

aws cloudfront create-invalidation --distribution-id "$DISTRIBUTION_ID" --paths "/index.html" "/compiler/*"
echo "Publicat a s3://$BUCKET"
