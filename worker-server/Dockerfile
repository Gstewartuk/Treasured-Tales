FROM node:20-bullseye-slim

# Install system dependencies for Puppeteer/Chromium
RUN apt-get update && apt-get install -y \
  ca-certificates fonts-liberation libatk-bridge2.0-0 libcups2 libdbus-1-3 libx11-xcb1 libxcomposite1 libxdamage1 libxrandr2 wget \
  --no-install-recommends && rm -rf /var/lib/apt/lists/*

WORKDIR /app
COPY package.json ./
RUN npm install --production
COPY . .
EXPOSE 3001
CMD ["node", "index.js"]
File: worker-server/README.md
Markdown
# Memory Weaver Worker
Processes storybook generation jobs from Supabase and uploads PDFs to storage.

## Deploying
1. Push this repo and deploy on Render or Railway.
2. Set env vars:
   - SUPABASE_URL
   - SUPABASE_SERVICE_ROLE_KEY
   - AI_API_KEY
   - WORKER_SECRET

## Endpoints
- **`GET /`**: Health check.
- **`POST /generate-job`**: Processes a single job.
