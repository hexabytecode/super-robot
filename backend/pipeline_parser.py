from collections import defaultdict, deque
from models import Node, Edge, PipelineData

def parse_pipeline(data: PipelineData):
    nodes = data.nodes
    edges = data.edges

    num_nodes = len(nodes)
    num_edges = len(edges)

    adjacency_list = defaultdict(list)
    in_degree = defaultdict(int)

    for edge in edges:
        adjacency_list[edge.source].append(edge.target)
        in_degree[edge.target] += 1

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
