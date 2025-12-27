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
