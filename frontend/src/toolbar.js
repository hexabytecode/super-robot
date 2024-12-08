import { DraggableNode } from "./draggableNode";

export const PipelineToolbar = () => {
  const toolbarItems = [
    { type: "customInput", label: "Input", icon: "📥" },
    { type: "llm", label: "LLM", icon: "🤖" },
    { type: "customOutput", label: "Output", icon: "📤" },
    { type: "text", label: "Text", icon: "📝" },
    { type: "filter", label: "Filter", icon: "🔍" },
    { type: "file", label: "File", icon: "📂" },
    { type: "transformer", label: "Transformer", icon: "🔧" },
    { type: "decision", label: "Decision", icon: "⚖️" },
    { type: "timeout", label: "Timeout", icon: "⏳" },
  ];

  return (
    <div className="p-4 shadow-md bg-white">
      <div className="mb-4">
        <h2 className="text-xl font-semibold">Pipeline Toolbar</h2>
        <p className="text-sm text-gray-500">
          Drag and drop nodes to build your pipeline.
        </p>
      </div>

      {/* Toolbar items */}
      <div className="mt-4 flex flex-wrap gap-4 justify-start">
        {toolbarItems.map((item, index) => (
          <DraggableNode
            className={"rounded-lg"}
            key={index}
            type={item.type}
            label={item.label}
            icon={item.icon}
          />
        ))}
      </div>
    </div>
  );
};
