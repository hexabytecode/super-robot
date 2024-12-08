import { useState } from "react";
import NodeBase from "../nodeBase";
import "../../styles/nodeStyles.css";

export const TransformerNode = ({ id, data }) => {
  const [transformation, setTransformation] = useState(
    data?.transformation || "uppercase"
  );

  const content = (
    <div className="space-y-2">
      <div className="flex items-center space-x-2">
        <label className="node-label">Transformation:</label>
        <select
          value={transformation}
          onChange={(e) => setTransformation(e.target.value)}
          className="node-select"
        >
          <option value="operation_1">Data Operation 1</option>
          <option value="operation_2">Data Operation 2</option>
        </select>
      </div>
    </div>
  );

  const handles = [
    { type: "target", position: "left", id: "input" },
    { type: "source", position: "right", id: "transformedOutput" },
  ];

  return (
    <NodeBase
      id={id}
      type="transformer"
      title="Transformer"
      content={content}
      handles={handles}
      icon="🔧"
    />
  );
};
