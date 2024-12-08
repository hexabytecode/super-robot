import { useState, useRef, useCallback } from "react";
import ReactFlow, { Controls, Background, MiniMap } from "reactflow";
import { useStore } from "./store";
import { shallow } from "zustand/shallow";
import { InputNode } from "./nodes/inputNode";
import { LLMNode } from "./nodes/llmNode";
import { OutputNode } from "./nodes/outputNode";
import { TextNode } from "./nodes/textNode";
import { FilterNode } from "./nodes/newNodes/filterNode";
import { FileNode } from "./nodes/newNodes/fileNode";
import { TransformerNode } from "./nodes/newNodes/transformerNode";
import { DecisionNode } from "./nodes/newNodes/decisionNode";
import { TimeoutNode } from "./nodes/newNodes/timeoutNode";

import "reactflow/dist/style.css";
import { handleOnDrop, handleOnDragOver } from "./helpers/dragDrop";

const gridSize = 20;
const proOptions = { hideAttribution: true };
const nodeTypes = {
  customInput: InputNode,
  llm: LLMNode,
  customOutput: OutputNode,
  text: TextNode,
  file: FileNode,
  filter: FilterNode,
  transformer: TransformerNode,
  decision: DecisionNode,
  timeout: TimeoutNode,
};

const selector = (state) => ({
  nodes: state.nodes,
  edges: state.edges,
  getNodeID: state.getNodeID,
  addNode: state.addNode,
  onNodesChange: state.onNodesChange,
  onEdgesChange: state.onEdgesChange,
  onConnect: state.onConnect,
});

export const PipelineUI = () => {
  const reactFlowWrapper = useRef(null);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);
  const {
    nodes,
    edges,
    getNodeID,
    addNode,
    onNodesChange,
    onEdgesChange,
    onConnect,
  } = useStore(selector, shallow);

  const onDrop = useCallback(
    (event) =>
      handleOnDrop(
        event,
        reactFlowInstance,
        reactFlowWrapper,
        getNodeID,
        addNode
      ),
    [reactFlowInstance, getNodeID, addNode]
  );

  const onDragOver = useCallback((event) => handleOnDragOver(event), []);

  return (
    <>
      <div ref={reactFlowWrapper} style={{ width: "100vw", height: "70vh" }}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          onDrop={onDrop}
          onDragOver={onDragOver}
          onInit={setReactFlowInstance}
          nodeTypes={nodeTypes}
          proOptions={proOptions}
          snapGrid={[gridSize, gridSize]}
          connectionLineType="smoothstep"
          className={{ backgroundColor: "#e5e7eb" }}
        >
          <Background color="#000" gap={gridSize} lineWidth={2} />
          <Controls />
          <MiniMap />
        </ReactFlow>
      </div>
    </>
  );
};
