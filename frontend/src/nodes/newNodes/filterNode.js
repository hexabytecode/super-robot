import { useState } from "react";
import NodeBase from "../nodeBase";
import "../../styles/nodeStyles.css";

export const FilterNode = ({ id, data }) => {
  const [filterCondition, setFilterCondition] = useState(
    data?.condition || "age > 30"
  );

  const content = (
    <div className="space-y-2">
      <div className="flex items-center space-x-2">
        <label className="node-label">Filter:</label>
        <input
          type="text"
          value={filterCondition}
          onChange={(e) => setFilterCondition(e.target.value)}
          className="node-input"
        />
      </div>
    </div>
  );

  const handles = [
    { type: "target", position: "left", id: "input" },
    { type: "source", position: "right", id: "filteredOutput" },
  ];

  return (
    <NodeBase
      id={id}
      type="filter"
      title="Filter"
      content={content}
      handles={handles}
    />
  );
};
