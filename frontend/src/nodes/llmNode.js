// llmNode.js
import NodeBase from "./nodeBase";
import "../styles/nodeStyles.css"; // Import the CSS file

export const LLMNode = ({ id }) => {
  const content = (
    <span className="node-label text-gray-500">This is an LLM node.</span>
  );

  const handles = [
    {
      type: "target",
      position: "left",
      id: "system",
      style: { top: `${100 / 3}%` },
    },
    {
      type: "target",
      position: "left",
      id: "prompt",
      style: { top: `${200 / 3}%` },
    },
    { type: "source", position: "right", id: "response" },
  ];

  return (
    <NodeBase
      id={id}
      type="llm"
      title="LLM"
      content={content}
      handles={handles}
      icon="🤖"
    />
  );
};
