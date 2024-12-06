import { useState } from "react";
import NodeBase from "../nodeBase";

export const DecisionNode = ({ id, data }) => {
  const [condition, setCondition] = useState(data?.condition || "isValid");

  const content = (
    <div>
      <label>
        Condition:
        <input
          type="text"
          value={condition}
          onChange={(e) => setCondition(e.target.value)}
        />
      </label>
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
