#!/usr/bin/env bash
# Convert a Markdown file to PDF: marked (md->html) + Chrome headless print-to-pdf.
set -euo pipefail
MD="$1"; OUT="${2:-${MD%.md}.pdf}"
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
TMP="$(mktemp -d)"; HTML="$TMP/doc.html"
{
  printf '%s' '<!doctype html><meta charset="utf-8"><style>
  body{font:13px/1.55 -apple-system,"Helvetica Neue",Arial,sans-serif;margin:32px;color:#111}
  h1{font-size:22px;border-bottom:2px solid #333;padding-bottom:6px}
  h2{font-size:17px;margin-top:26px;border-bottom:1px solid #ccc;padding-bottom:4px}
  h3{font-size:14px;margin-top:20px}
  table{border-collapse:collapse;width:100%;margin:10px 0;font-size:11px}
  th,td{border:1px solid #bbb;padding:5px 7px;text-align:left;vertical-align:top}
  th{background:#f0f0f0}
  code{background:#f4f4f4;padding:1px 4px;border-radius:3px;font-size:11px}
  pre{background:#f6f6f6;padding:10px;overflow:auto;border-radius:4px}
  img{max-width:100%}
  </style>'
  npx --yes marked@15 -i "$MD"
} > "$HTML"
"$CHROME" --headless --disable-gpu --no-pdf-header-footer --print-to-pdf="$OUT" "file://$HTML" >/dev/null 2>&1
[ -s "$OUT" ] && echo "wrote $OUT ($(wc -c <"$OUT") bytes)" || { echo "FAILED: $OUT"; exit 1; }
