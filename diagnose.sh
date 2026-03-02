#!/bin/bash
# Vercel 404 Quick Diagnosis

echo "=== Vercel 404 Diagnosis ==="
echo ""

# Test possible URLs
URLS=(
    "https://emajjsky-baltan.vercel.app"
    "https://baltan.vercel.app"
    "https://emajjsky.vercel.app"
)

echo "Testing all possible URLs..."
echo ""

WORKING_URL=""

for url in "${URLS[@]}"; do
    CODE=$(curl -s -o /dev/null -w "%{http_code}" "$url")
    if [ "$CODE" = "200" ]; then
        echo "[OK] $url"
        WORKING_URL="$url"
    else
        echo "[FAIL] $url ($CODE)"
    fi
done

echo ""
echo "=== Result ==="

if [ -n "$WORKING_URL" ]; then
    echo "Working URL found:"
    echo "  $WORKING_URL"
    echo ""
    echo "Direct access:"
    echo "  $WORKING_URL"
    echo "  $WORKING_URL/growth.html"
    echo "  $WORKING_URL/index.html"
else
    echo "All URLs failed"
    echo ""
    echo "Solution:"
    echo "  1. Visit Vercel Dashboard"
    echo "  2. Find the project"
    echo "  3. Delete and reconnect to emajjsky/baltan"
fi
