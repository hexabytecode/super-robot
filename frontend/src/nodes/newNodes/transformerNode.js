import { useState } from "react";
import NodeBase from "../nodeBase";

export const TransformerNode = ({ id, data }) => {
  const [transformation, setTransformation] = useState(
    data?.transformation || "uppercase"
  );

  const content = (
    <div>
      <label>
        Transformation:
        <select
          value={transformation}
          onChange={(e) => setTransformation(e.target.value)}
        >
          <option value="operation_1">Data Operation 1</option>
          <option value="operation_2">Data Operation 2</option>
        </select>
      </label>
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
    />
  );
};
