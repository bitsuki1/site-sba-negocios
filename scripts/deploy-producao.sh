#!/usr/bin/env bash
# ============================================================================
# Deploy de PRODUÇÃO — Site SBA Negócios → GitHub Pages (branch gh-pages)
# Domínio próprio: https://sbanegocios.com.br
#
# Por que é manual: o "Pages via GitHub Actions" deste repo está bloqueado
# (token de integração sem permissão de Pages — "Resource not accessible by
# integration"). Enquanto isso não é regularizado nas Settings do repo, este
# script reproduz EXATAMENTE a virada de produção, de forma determinística.
#
# Uso: rode da raiz do repo, com a branch de conteúdo já no estado a publicar.
#   bash scripts/deploy-producao.sh
# ============================================================================
set -euo pipefail

cd "$(dirname "$0")/.."

echo "==> build de produção (base '/', sem BASE_PATH)"
unset BASE_PATH || true
npm install --no-audit --no-fund
npm run build

echo "==> arquivos de domínio próprio"
printf 'sbanegocios.com.br\n' > dist/CNAME   # custom domain do GitHub Pages
cp dist/index.html dist/404.html             # SPA: deep-link / refresh sem 404
touch dist/.nojekyll                         # não processar com Jekyll

echo "==> publicando dist/ na branch gh-pages (force)"
REMOTE="$(git remote get-url origin)"
NAME="$(git log -1 --format='%an')"
EMAIL="$(git log -1 --format='%ae')"
TMP="$(mktemp -d)"
cp -a dist/. "$TMP/"
(
  cd "$TMP"
  git init -q
  git checkout -q -b gh-pages
  git add -A
  git -c user.name="$NAME" -c user.email="$EMAIL" \
      commit -qm "deploy: produção sbanegocios.com.br"
  git push -f "$REMOTE" gh-pages:gh-pages
)
rm -rf "$TMP"

echo "==> OK — https://sbanegocios.com.br"
echo "    (No 1º deploy o GitHub provisiona o certificado TLS em minutos.)"
