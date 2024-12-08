import { getInitNodeData } from "./nodeData";

export const handleOnDrop = (
  event,
  reactFlowInstance,
  reactFlowWrapper,
  getNodeID,
  addNode
) => {
  event.preventDefault();

  const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
  if (event?.dataTransfer?.getData("application/reactflow")) {
    const appData = JSON.parse(
      event.dataTransfer.getData("application/reactflow")
    );
    const type = appData?.nodeType;

    if (typeof type === "undefined" || !type) {
      return;
    }

    const position = reactFlowInstance.project({
      x: event.clientX - reactFlowBounds.left,
      y: event.clientY - reactFlowBounds.top,
    });

    const nodeID = getNodeID(type);
    const newNode = {
      id: nodeID,
      type,
      position,
      data: getInitNodeData(nodeID, type),
    };

    addNode(newNode);
  }
};

export const handleOnDragOver = (event) => {
  event.preventDefault();
  event.dataTransfer.dropEffect = "move";
};
