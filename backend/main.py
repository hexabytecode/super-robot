from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field
from collections import defaultdict, deque
from typing import List, Optional, Dict, Any

app = FastAPI()

# Define the data model for nodes
from pydantic import BaseModel, Field
from typing import Optional, Dict, Any

class Node(BaseModel):
    id: str
    type: str
    position: Dict[str, float]
    data: Dict[str, Any]
    width: int
    height: int
    selected: Optional[bool] = False  # Defaulting to False if not provided
    positionAbsolute: Optional[Dict[str, float]] = {}  # Defaulting to empty dictionary
    dragging: Optional[bool] = False  # Defaulting to False if not provided

# Define the data model for edges
class Edge(BaseModel):
    source: str
    sourceHandle: Optional[str] = None
    target: str
    targetHandle: Optional[str] = None
    type: Optional[str] = None
    animated: Optional[bool] = False
    markerEnd: Optional[Dict[str, Any]] = None
    id: str

class PipelineData(BaseModel):
    nodes: List[Node]
    edges: List[Edge]

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Replace "*" with specific origin(s) for production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"Ping": "Pong"}

@app.post("/pipelines/parse")
async def parse_pipeline(data: PipelineData):
    """
    Parse pipeline data to compute:
    - Number of nodes
    - Number of edges
    - Whether the graph is a Directed Acyclic Graph (DAG)
    """
    try:
        nodes = data.nodes
        edges = data.edges

        # Compute number of nodes and edges
        num_nodes = len(nodes)
        num_edges = len(edges)

        # Build adjacency list to check if it's a DAG
        adjacency_list = defaultdict(list)
        in_degree = defaultdict(int)

        for edge in edges:
            adjacency_list[edge.source].append(edge.target)
            in_degree[edge.target] += 1

        # Topological sort (Kahn's Algorithm) to check for DAG
        queue = deque([node.id for node in nodes if in_degree[node.id] == 0])
        visited = 0

        while queue:
            current = queue.popleft()
            visited += 1
            for neighbor in adjacency_list[current]:
                in_degree[neighbor] -= 1
                if in_degree[neighbor] == 0:
                    queue.append(neighbor)

        is_dag = visited == num_nodes

        return {
            "num_nodes": num_nodes,
            "num_edges": num_edges,
            "is_dag": is_dag,
        }
    except Exception as e:
        raise HTTPException(status_code=400, detail=f"Error processing pipeline: {str(e)}")