from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from models import PipelineData
from pipeline_parser import parse_pipeline

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"Ping": "Pong"}

@app.post("/pipelines/parse")
async def parse_pipeline_endpoint(data: PipelineData):
    try:
        result = parse_pipeline(data)
        return result
    except Exception as e:
        raise HTTPException(status_code=400, detail=f"Error processing pipeline: {str(e)}")