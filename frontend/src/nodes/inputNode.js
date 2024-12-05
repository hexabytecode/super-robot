// inputNode.js
import { useState } from "react";
import NodeBase from "./nodeBase";

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(
    data?.inputName || id.replace("customInput-", "input_")
  );
  const [inputType, setInputType] = useState(data.inputType || "Text");

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
          value={inputType}
          onChange={(e) => setInputType(e.target.value)}
        >
          <option value="Text">Text</option>
          <option value="File">File</option>
        </select>
      </label>
    </div>
  );

  const handles = [{ type: "source", position: "right", id: "value" }];

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
