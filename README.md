# Hello World - React + Python

一個簡單的全端應用程式展示 React 前端 + Python FastAPI 後端，透過 GitHub Actions CI/CD 部署到 Google Kubernetes Engine (GKE)。

## 🚀 專案架構

```
├── backend/          # Python FastAPI 後端
├── frontend/         # React + Vite 前端
├── k8s/              # Kubernetes 配置
└── .github/workflows # CI/CD workflows
```

## 🛠️ 本地開發

### 使用 Docker Compose

```bash
docker-compose up --build
```

- 前端: http://localhost:3000
- 後端 API: http://localhost:8000/api/hello

### 手動啟動

**後端:**
```bash
cd backend
pip install -r requirements.txt
uvicorn app.main:app --reload
```

**前端:**
```bash
cd frontend
npm install
npm run dev
```

## ☁️ GKE 部署

### 1. 設定 GitHub Secrets

| Secret | 說明 |
|--------|------|
| `GCP_PROJECT_ID` | GCP 專案 ID |
| `GKE_CLUSTER` | GKE 叢集名稱 |
| `GKE_ZONE` | GKE 叢集區域 |
| `GCP_WORKLOAD_IDENTITY_PROVIDER` | Workload Identity Provider |
| `GCP_SERVICE_ACCOUNT` | 服務帳號 email |

### 2. 建立 Artifact Registry

```bash
gcloud artifacts repositories create hello-world \
    --repository-format=docker \
    --location=asia-east1
```

### 3. 推送到 GitHub

Push 到 `main` 分支會自動觸發 CI/CD pipeline。

## 📋 API 端點

| 端點 | 說明 |
|------|------|
| `GET /api/hello` | 回傳 Hello World 訊息 |
| `GET /api/health` | 健康檢查 |
