// TimeoutNode.js

import React, { useState, useEffect } from "react";
import NodeBase from "../nodeBase";

export const TimeoutNode = ({ id, data }) => {
  const [timeoutDuration, setTimeoutDuration] = useState(data?.timeout || 5000);
  const [error, setError] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setError(true);
    }, timeoutDuration);

    return () => clearTimeout(timer);
  }, [timeoutDuration]);

  const handleDurationChange = (e) => {
    setTimeoutDuration(e.target.value);
    setError(false); // Reset error state when timer is changed
  };

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
      title="Timeout Node"
      content={
        <div>
          <div>
            Timeout Duration:
            <input
              type="number"
              value={timeoutDuration}
              onChange={handleDurationChange} // Call the handler to reset error state
            />
            ms
          </div>
          {error && (
            <div style={{ color: "red" }}>Timeout error! Retrying...</div>
          )}
        </div>
      }
      handles={handles}
    />
  );
};
