from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(
    title="Hello World API",
    description="A simple API that returns Hello World",
    version="1.0.0"
)

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/api/hello")
async def hello():
    """Return Hello World message"""
    return {"message": "Hello World"}


@app.get("/api/health")
async def health():
    """Health check endpoint"""
    return {"status": "healthy"}
