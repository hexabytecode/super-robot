import { useState, useEffect } from "react";
import NodeBase from "../nodeBase";
import "../../styles/nodeStyles.css";

export const TimeoutNode = ({ id, data }) => {
  const [timeoutDuration, setTimeoutDuration] = useState(
    data?.timeout || 20000
  );
  const [error, setError] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setError(true), timeoutDuration);
    return () => clearTimeout(timer);
  }, [timeoutDuration]);

  const content = (
    <div className="space-y-2">
      <div className="flex items-center space-x-2">
        <label className="node-label">Timeout Duration:</label>
        <input
          type="number"
          value={timeoutDuration}
          onChange={(e) => {
            setTimeoutDuration(e.target.value);
            setError(false);
          }}
          className="node-input"
        />
      </div>
      {error && <div className="text-red-500">Timeout error! Retrying...</div>}
    </div>
  );

  const handles = [
    {
      type: "target",
      position: "right",
      id: "timeout-reset",
      style: { top: "50%" },
    },
    {
      type: "source",
      position: "left",
      id: "timeout-input",
      style: { top: "50%" },
    },
  ];

  return (
    <NodeBase
      id={id}
      type="timeout"
      title="Timeout"
      content={content}
      handles={handles}
    />
  );
};
