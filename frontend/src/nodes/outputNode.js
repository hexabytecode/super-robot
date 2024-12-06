// outputNode.js
import { useState } from "react";
import NodeBase from "./nodeBase";
import "../styles/nodeStyles.css"; // Import the CSS file

export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(
    data?.outputName || id.replace("customOutput-", "output_")
  );
  const [outputType, setOutputType] = useState(data.outputType || "Text");

  const content = (
    <div className="space-y-2">
      <div className="flex items-center space-x-2">
        <label className="node-label">Name:</label>
        <input
          type="text"
          value={currName}
          onChange={(e) => setCurrName(e.target.value)}
          className="node-input"
        />
      </div>
      <div className="flex items-center space-x-2">
        <label className="node-label">Type:</label>
        <select
          value={outputType}
          onChange={(e) => setOutputType(e.target.value)}
          className="node-select"
        >
          <option value="Text">Text</option>
          <option value="Image">Image</option>
        </select>
      </div>
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
