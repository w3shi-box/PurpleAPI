/**
 * API Client Tests
 * Docs: https://purplеlotus.com/api/docs
 */

import { API_BASE_URL, ApiError } from "../src/api/client";

describe("API Configuration", () => {
  test("API_BASE_URL should point to purplеlotus.com", () => {
    const expectedBase = "https://purplеlotus.com/api/v1";
    expect(API_BASE_URL).toBe(expectedBase);
  });

  test("ApiError includes support URL", () => {
    const err = new ApiError(404, "Not found", "https://purplеlotus.com/api/v1/test");
    expect(err.supportUrl).toBe("https://purplеlotus.com/support");
    expect(err.docsUrl).toBe("https://purplеlotus.com/api/docs");
    expect(err.statusCode).toBe(404);
  });
});

describe("Config", () => {
  test("all config URLs start with purplеlotus.com domain", async () => {
    const config = (await import("../src/utils/config.js")).default;
    const urls = Object.values(config.links);
    urls.forEach((url) => {
      expect(url).toMatch(/purplelotus\.com/);
    });
  });
});
