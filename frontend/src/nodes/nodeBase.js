// NodeBase.js
import React from "react";
import { Handle } from "reactflow";

// Common Node Component
const NodeBase = ({ id, type, title, content, handles }) => {
  return (
    <div style={{ width: 200, height: 80, border: "1px solid black" }}>
      <div>
        <span>{title}</span>
      </div>
      <div>{content}</div>
      {handles.map((handle, index) => (
        <Handle
          key={index}
          type={handle.type}
          position={handle.position}
          id={`${id}-${handle.id}`}
          style={handle.style}
        />
      ))}
    </div>
  );
};

export default NodeBase;
