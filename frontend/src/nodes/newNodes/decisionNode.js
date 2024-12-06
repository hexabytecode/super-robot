import { useState } from "react";
import NodeBase from "../nodeBase";
import "../../styles/nodeStyles.css";

export const DecisionNode = ({ id, data }) => {
  const [condition, setCondition] = useState(data?.condition || "isValid");

  const content = (
    <div className="space-y-2">
      <div className="flex items-center space-x-2">
        <label className="node-label">Condition:</label>
        <input
          type="text"
          value={condition}
          onChange={(e) => setCondition(e.target.value)}
          className="node-input"
        />
      </div>
    </div>
  );

  const handles = [
    { type: "target", position: "left", id: "response" },
    {
      type: "source",
      position: "right",
      id: "trueOutput",
      style: { top: `${100 / 3}%` },
    },
    {
      type: "source",
      position: "right",
      id: "falseOutput",
      style: { top: `${200 / 3}%` },
    },
  ];

  return (
    <NodeBase
      id={id}
      type="decision"
      title="Decision"
      content={content}
      handles={handles}
    />
  );
};
