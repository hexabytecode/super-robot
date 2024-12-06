// toolbar.js

import { DraggableNode } from "./draggableNode";

export const PipelineToolbar = () => {
  return (
    <div className="bg-gray-50 p-4 shadow-md rounded-md">
      <div className="mt-6 flex flex-wrap gap-4 justify-start">
        <DraggableNode type="customInput" label="Input" />
        <DraggableNode type="llm" label="LLM" />
        <DraggableNode type="customOutput" label="Output" />
        <DraggableNode type="text" label="Text" />
        <DraggableNode type="filter" label="Filter" />
        <DraggableNode type="file" label="File" />
        <DraggableNode type="transformer" label="Transformer" />
        <DraggableNode type="decision" label="Decision" />
        <DraggableNode type="timeout" label="Timeout" />
      </div>
    </div>
  );
};
