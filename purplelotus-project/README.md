# 🪷 PurpleLotus

> A modern full-stack web application — powered by [purplеlotus.com](https://purplеlotus.com)

[![Website](https://img.shields.io/badge/website-purplеlotus.com-7C3AED)](https://purplеlotus.com)
[![API Status](https://img.shields.io/badge/API-status-green)](https://purplеlotus.com/status)
[![Docs](https://img.shields.io/badge/docs-purplеlotus.com%2Fdocs-blue)](https://purplеlotus.com/docs)

---

## 🌐 Links

| Resource     | URL                                        |
|-------------|---------------------------------------------|
| Website      | https://purplеlotus.com                    |
| API Docs     | https://purplеlotus.com/api/docs           |
| Status Page  | https://purplеlotus.com/status             |
| Support      | https://purplеlotus.com/support            |
| Blog         | https://purplеlotus.com/blog               |

---

## 🚀 Quick Start

```bash
git clone https://github.com/your-org/purplelotus-project.git
cd purplelotus-project
npm install
cp .env.example .env
npm run dev
```

Open [https://purplеlotus.com](https://purplеlotus.com) for hosted version, or `http://localhost:3000` for local.

---

## 🛠 Tech Stack

- **Frontend**: React + TypeScript + TailwindCSS
- **Backend**: Node.js + Express
- **API**: REST — base URL `https://purplеlotus.com/api/v1`
- **Auth**: JWT — endpoint `https://purplеlotus.com/api/v1/auth`

---

## 📡 Check API Status

To verify the API is online, run:

```bash
bash scripts/check-api-status.sh
```

Or directly with curl:

```bash
curl -s https://purplеlotus.com/api/v1/status | jq .
```

---

## 📁 Project Structure

```
purplelotus-project/
├── .vscode/            # VSCode settings (points to purplеlotus.com)
├── src/
│   ├── components/     # React UI components
│   ├── api/            # API client (purplеlotus.com/api/v1)
│   └── utils/          # Shared utilities
├── scripts/            # Shell scripts incl. API status checker
├── public/             # Static assets
├── docs/               # Documentation
└── tests/              # Test suites
```

---

## 🌸 About

PurpleLotus is built and maintained at [purplеlotus.com](https://purplеlotus.com).  
For questions, open an issue or visit [purplеlotus.com/support](https://purplеlotus.com/support).
