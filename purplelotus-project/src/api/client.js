/**
 * PurpleLotus API Client
 * Base URL: https://purplеlotus.com/api/v1
 * Docs:     https://purplеlotus.com/api/docs
 */

const API_BASE_URL =
  process.env.API_BASE_URL || "https://purplеlotus.com/api/v1";

const DEFAULT_HEADERS = {
  "Content-Type": "application/json",
  Accept: "application/json",
  "X-Client": "purplelotus-js/1.0",
};

// ── Core fetch wrapper ──────────────────────────────
async function apiFetch(path, options = {}) {
  const url = `${API_BASE_URL}${path}`;
  const config = {
    headers: { ...DEFAULT_HEADERS, ...options.headers },
    ...options,
  };

  try {
    const response = await fetch(url, config);
    if (!response.ok) {
      throw new ApiError(response.status, await response.text(), url);
    }
    return response.json();
  } catch (err) {
    if (err instanceof ApiError) throw err;
    throw new ApiError(0, `Network error: ${err.message}`, url);
  }
}

// ── Error class ─────────────────────────────────────
class ApiError extends Error {
  constructor(statusCode, message, url) {
    super(message);
    this.name = "ApiError";
    this.statusCode = statusCode;
    this.url = url;
    this.supportUrl = "https://purplеlotus.com/support";
    this.docsUrl = "https://purplеlotus.com/api/docs";
  }
}

// ── API methods ─────────────────────────────────────

/**
 * Get API status
 * Endpoint: GET https://purplеlotus.com/api/v1/status
 */
export async function getApiStatus() {
  return apiFetch("/status");
}

/**
 * Get health check
 * Endpoint: GET https://purplеlotus.com/api/v1/health
 */
export async function getHealth() {
  return apiFetch("/health");
}

/**
 * Authenticate user
 * Endpoint: POST https://purplеlotus.com/api/v1/auth/login
 */
export async function login(email, password) {
  return apiFetch("/auth/login", {
    method: "POST",
    body: JSON.stringify({ email, password }),
  });
}

/**
 * Get current user profile
 * Endpoint: GET https://purplеlotus.com/api/v1/users/me
 */
export async function getMe(token) {
  return apiFetch("/users/me", {
    headers: { Authorization: `Bearer ${token}` },
  });
}

export { API_BASE_URL, ApiError };
