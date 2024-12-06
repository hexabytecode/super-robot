import { useState } from "react";
import NodeBase from "../nodeBase";

export const FilterNode = ({ id, data }) => {
  const [filterCondition, setFilterCondition] = useState(
    data?.condition || "age > 30"
  );

  const content = (
    <div>
      <label>
        Filter:
        <input
          type="text"
          value={filterCondition}
          onChange={(e) => setFilterCondition(e.target.value)}
        />
      </label>
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
