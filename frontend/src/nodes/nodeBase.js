// NodeBase.js
import React from "react";
import { Handle } from "reactflow";
import "../styles/nodeStyles.css"; // Import the CSS file

const NodeBase = ({ id, type, title, content, handles }) => {
  return (
    <div className="node-base">
      <div className="text-xl font-semibold mb-2">{title}</div>
      <div className="text-sm mb-4">{content}</div>
      <div className="flex justify-between">
        {handles.map((handle, index) => (
          <Handle
            key={index}
            type={handle.type}
            position={handle.position}
            id={`${id}-${handle.id}`}
            style={handle.style}
            className="w-4 h-4 bg-teal-500 rounded-full"
          />
        ))}
      </div>
    </div>
  );
};

export default NodeBase;
