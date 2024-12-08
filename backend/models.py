from pydantic import BaseModel, Field
from typing import Optional, Dict, Any
from collections import defaultdict
from typing import List


class Node(BaseModel):
    id: str
    type: str
    position: Dict[str, float]
    data: Dict[str, Any]
    width: int
    height: int
    selected: Optional[bool] = False
    positionAbsolute: Optional[Dict[str, float]] = {}
    dragging: Optional[bool] = False

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
