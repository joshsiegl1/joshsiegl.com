# Google Cloud Run Deployment Guide

## Prerequisites
1. Install [Google Cloud CLI](https://cloud.google.com/sdk/docs/install)
2. Have a Google Cloud project created
3. Enable Cloud Run API and Artifact Registry

## Quick Deploy

### 1. Authenticate
```bash
gcloud auth login
gcloud config set project YOUR_PROJECT_ID
```

### 2. Deploy to Cloud Run
```bash
gcloud run deploy joshsiegl-portfolio \
  --source . \
  --platform managed \
  --region us-central1 \
  --allow-unauthenticated
```

This will:
- Build the Docker container automatically
- Deploy to Cloud Run
- Provide a public URL (e.g., `https://joshsiegl-portfolio-xxxx.run.app`)

### 3. Update (after changes)
```bash
gcloud run deploy joshsiegl-portfolio --source . --region us-central1
```

## Manual Docker Build (Optional)

If you prefer to build and push manually:

```bash
# Set variables
PROJECT_ID="your-project-id"
REGION="us-central1"
SERVICE_NAME="joshsiegl-portfolio"

# Build and tag
docker build -t gcr.io/$PROJECT_ID/$SERVICE_NAME:latest .

# Push to Google Container Registry
docker push gcr.io/$PROJECT_ID/$SERVICE_NAME:latest

# Deploy
gcloud run deploy $SERVICE_NAME \
  --image gcr.io/$PROJECT_ID/$SERVICE_NAME:latest \
  --platform managed \
  --region $REGION \
  --allow-unauthenticated
```

## Custom Domain Setup

After deployment, you can map a custom domain:

```bash
gcloud run domain-mappings create \
  --service joshsiegl-portfolio \
  --domain yourdomain.com \
  --region us-central1
```

Follow the DNS verification steps provided by Google.

## Environment Variables

If you need to set environment variables:

```bash
gcloud run services update joshsiegl-portfolio \
  --set-env-vars KEY1=value1,KEY2=value2 \
  --region us-central1
```

## Monitoring

View logs:
```bash
gcloud run services logs tail joshsiegl-portfolio --region us-central1
```

View service details:
```bash
gcloud run services describe joshsiegl-portfolio --region us-central1
```

## Cost Notes
- Cloud Run charges only when requests are being served
- Free tier includes 2 million requests/month
- Minimum instances set to 0 means no cost when idle
