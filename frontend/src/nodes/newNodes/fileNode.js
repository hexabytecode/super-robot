import { useState } from "react";
import NodeBase from "../nodeBase";
import "../../styles/nodeStyles.css";

export const FileNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || "{{input}}");

  const content = (
    <div className="space-y-2">
      <div className="flex items-center space-x-2">
        <label className="node-label">File:</label>
        <input
          type="text"
          value={currText}
          onChange={(e) => setCurrText(e.target.value)}
          className="node-input"
        />
      </div>
    </div>
  );

  const handles = [
    { type: "source", position: "right", id: "output" },
    { type: "target", position: "top", id: "retrigger" },
  ];

  return (
    <NodeBase
      id={id}
      type="file"
      title="File"
      content={content}
      handles={handles}
      icon="📂"
    />
  );
};
