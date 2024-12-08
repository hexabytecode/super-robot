import { useState, useEffect } from "react";
import NodeBase from "./nodeBase";
import "../styles/nodeStyles.css";
import debounce from "lodash.debounce";

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || "{{input}}");
  const [currVars, setVars] = useState([]);
  const [variableNames, setVariableNames] = useState([]);

  const extractVariables = (text) => {
    const regex = /{{(.*?)}}/g;
    let matches = [];
    let match;
    while ((match = regex.exec(text)) !== null) {
      matches.push(match[1]);
    }
    setVars([...new Set(matches)]);
    return [...new Set(matches)];
  };

  const updateVariableNames = debounce((text) => {
    const variables = extractVariables(text);
    setVariableNames(variables);
  }, 300);

  useEffect(() => {
    updateVariableNames(currText);
  }, [currText]);

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
  };

  const resizeTextArea = (e) => {
    e.target.style.height = "auto";
    e.target.style.height = `${e.target.scrollHeight}px`;
  };

  const highlightVariables = () => {
    return currVars.map((part, index) => {
      return (
        <span
          key={index}
          className="text-xs me-2 py-1 px-2 bg-gray-300 rounded-md font-semibold"
        >
          {`${part}`}
        </span>
      );
    });
  };

  const content = (
    <div className="space-y-2">
      <div className="flex items-center space-x-2">
        <label className="node-label">Text:</label>
        <textarea
          value={currText}
          onChange={handleTextChange}
          onInput={resizeTextArea}
          className="node-input resize-none"
          rows="1"
        />
      </div>
      <div className="text-preview">{highlightVariables()}</div>
    </div>
  );

  const handles = [
    { type: "source", position: "right", id: "output" },
    { type: "target", position: "top", id: "retrigger" },
  ];

  const calculateHandlePosition = (index, totalHandles) => {
    if (totalHandles === 1) {
      return "50%";
    }
    return `${(100 * (index + 1)) / (totalHandles + 1)}%`;
  };

  const variableHandles = variableNames.map((variable, index) => ({
    type: "target",
    position: "left",
    id: `variable_${variable}_${index}`,
    title: variable,
    style: {
      top: calculateHandlePosition(index, variableNames.length),
    },
  }));

  const allHandles = [...handles, ...variableHandles];

  return (
    <NodeBase
      id={id}
      type="text"
      title="Text"
      content={content}
      handles={allHandles}
      icon="📝"
    />
  );
};
