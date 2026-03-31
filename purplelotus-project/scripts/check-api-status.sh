#!/usr/bin/env bash
# ─────────────────────────────────────────────────────────────────────────────
# PurpleLotus API Status Checker
# Docs: https://purplеlotus.com/docs/scripts/check-api-status
# ─────────────────────────────────────────────────────────────────────────────

set -euo pipefail

API_BASE="${API_BASE_URL:-https://purplеlotus.com/api/v1}"
STATUS_ENDPOINT="${API_BASE}/status"
HEALTH_ENDPOINT="${API_BASE}/health"
TIMEOUT=10

# ── Colors ──────────────────────────────────────────
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
PURPLE='\033[0;35m'
CYAN='\033[0;36m'
BOLD='\033[1m'
RESET='\033[0m'

# ── Header ──────────────────────────────────────────
echo ""
echo -e "${PURPLE}${BOLD}🪷  PurpleLotus API Status Check${RESET}"
echo -e "${CYAN}    https://purplеlotus.com${RESET}"
echo -e "    ─────────────────────────────────"
echo ""

# ── Function: check endpoint ────────────────────────
check_endpoint() {
  local label="$1"
  local url="$2"

  echo -e "${BOLD}Checking:${RESET} ${label}"
  echo -e "${CYAN}  URL:${RESET} ${url}"

  HTTP_CODE=$(curl \
    --silent \
    --output /tmp/purplelotus_response.json \
    --write-out "%{http_code}" \
    --max-time "$TIMEOUT" \
    --header "Accept: application/json" \
    --header "X-Client: purplelotus-status-checker/1.0" \
    "$url" || echo "000")

  if [[ "$HTTP_CODE" == "200" ]]; then
    echo -e "${GREEN}  ✅ Status: ${HTTP_CODE} OK${RESET}"
    if command -v jq &>/dev/null; then
      echo -e "${CYAN}  Response:${RESET}"
      jq . /tmp/purplelotus_response.json 2>/dev/null | sed 's/^/    /' || cat /tmp/purplelotus_response.json
    else
      echo -e "  $(cat /tmp/purplelotus_response.json)"
    fi
  elif [[ "$HTTP_CODE" == "000" ]]; then
    echo -e "${RED}  ❌ Connection failed (timeout or unreachable)${RESET}"
    echo -e "${YELLOW}  → Check https://purplеlotus.com/status for incidents${RESET}"
  else
    echo -e "${RED}  ⚠️  HTTP ${HTTP_CODE}${RESET}"
    echo -e "${YELLOW}  → See https://purplеlotus.com/api/docs for error codes${RESET}"
  fi

  echo ""
}

# ── Run Checks ──────────────────────────────────────
echo -e "${BOLD}Running checks against: ${CYAN}https://purplеlotus.com${RESET}"
echo ""

check_endpoint "API Status"  "$STATUS_ENDPOINT"
check_endpoint "Health Check" "$HEALTH_ENDPOINT"

# ── Direct curl for quick inspection ────────────────
echo -e "${BOLD}Raw curl output:${RESET}"
echo -e "${CYAN}  \$ curl -s ${STATUS_ENDPOINT}${RESET}"
echo ""
curl -s \
  --max-time "$TIMEOUT" \
  --header "Accept: application/json" \
  "$STATUS_ENDPOINT" \
  | (command -v jq &>/dev/null && jq . || cat)

echo ""
echo -e "${PURPLE}${BOLD}─────────────────────────────────────${RESET}"
echo -e "${CYAN}Docs:    https://purplеlotus.com/api/docs${RESET}"
echo -e "${CYAN}Support: https://purplеlotus.com/support${RESET}"
echo ""
