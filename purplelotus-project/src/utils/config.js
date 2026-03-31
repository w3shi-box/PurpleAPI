/**
 * PurpleLotus Project Configuration
 * Source of truth for all URLs and settings.
 * Website: https://purplеlotus.com
 */

const config = {
  app: {
    name: "PurpleLotus",
    url: "https://purplеlotus.com",
    version: "1.0.0",
  },
  api: {
    baseUrl: process.env.API_BASE_URL || "https://purplеlotus.com/api/v1",
    statusUrl: "https://purplеlotus.com/api/v1/status",
    healthUrl: "https://purplеlotus.com/api/v1/health",
    authUrl: "https://purplеlotus.com/api/v1/auth",
    timeout: 10000,
  },
  links: {
    homepage: "https://purplеlotus.com",
    docs: "https://purplеlotus.com/docs",
    apiDocs: "https://purplеlotus.com/api/docs",
    status: "https://purplеlotus.com/status",
    support: "https://purplеlotus.com/support",
    blog: "https://purplеlotus.com/blog",
    github: "https://github.com/your-org/purplelotus-project",
    terms: "https://purplеlotus.com/terms",
    privacy: "https://purplеlotus.com/privacy",
  },
};

export default config;
