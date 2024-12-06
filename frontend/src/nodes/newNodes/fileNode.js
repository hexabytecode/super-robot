// fileNode.js
import { useState } from "react";
import NodeBase from "../nodeBase";

export const FileNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || "{{input}}");

  const content = (
    <div>
      <label>
        File:
        <input
          type="text"
          value={currText}
          onChange={(e) => setCurrText(e.target.value)}
        />
      </label>
    </div>
  );

  const handles = [{ type: "source", position: "right", id: "output" }];

  return (
    <NodeBase
      id={id}
      type="text"
      title="File"
      content={content}
      handles={handles}
    />
  );
};
