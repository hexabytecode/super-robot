// inputNode.js
import { useState } from "react";
import NodeBase from "./nodeBase";
import "../styles/nodeStyles.css"; // Import the CSS file

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(
    data?.inputName || id.replace("customInput-", "input_")
  );
  const [inputType, setInputType] = useState(data.inputType || "Text");

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
          value={inputType}
          onChange={(e) => setInputType(e.target.value)}
          className="node-select"
        >
          <option value="Text">Text</option>
          <option value="File">File</option>
        </select>
      </div>
    </div>
  );

  const handles = [
    { type: "source", position: "right", id: "value" },
    { type: "target", position: "top", id: "retrigger" },
  ];

  return (
    <NodeBase
      id={id}
      type="input"
      title="Input"
      content={content}
      handles={handles}
    />
  );
};
