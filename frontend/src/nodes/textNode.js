// textNode.js
import { useState } from "react";
import NodeBase from "./nodeBase";

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || "{{input}}");

  const content = (
    <div>
      <label>
        Text:
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
      title="Text"
      content={content}
      handles={handles}
    />
  );
};
