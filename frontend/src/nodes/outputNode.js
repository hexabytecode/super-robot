// outputNode.js
import { useState } from "react";
import NodeBase from "./nodeBase";

export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(
    data?.outputName || id.replace("customOutput-", "output_")
  );
  const [outputType, setOutputType] = useState(data.outputType || "Text");

  const content = (
    <div>
      <label>
        Name:
        <input
          type="text"
          value={currName}
          onChange={(e) => setCurrName(e.target.value)}
        />
      </label>
      <label>
        Type:
        <select
          value={outputType}
          onChange={(e) => setOutputType(e.target.value)}
        >
          <option value="Text">Text</option>
          <option value="Image">Image</option>
        </select>
      </label>
    </div>
  );

  const handles = [
    { type: "target", position: "left", id: "value" },
    { type: "source", position: "top", id: "retrigger" },
  ];

  return (
    <NodeBase
      id={id}
      type="output"
      title="Output"
      content={content}
      handles={handles}
    />
  );
};
