import { useState, useEffect } from "react";
import NodeBase from "./nodeBase";
import "../styles/nodeStyles.css"; // Import the CSS file
import debounce from "lodash.debounce"; // Import lodash debounce

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || "{{input}}");
  const [variableNames, setVariableNames] = useState([]);

  // Function to extract variable names from the text input
  const extractVariables = (text) => {
    const regex = /{{(.*?)}}/g;
    let matches = [];
    let match;
    while ((match = regex.exec(text)) !== null) {
      matches.push(match[1]); // Match is the variable name inside {{}}
    }
    return [...new Set(matches)]; // Remove duplicates
  };

  // Function to update the variable names (debounced)
  const updateVariableNames = debounce((text) => {
    const variables = extractVariables(text);
    setVariableNames(variables);
  }, 300); // 300ms debounce delay

  // Update variable names whenever the text changes
  useEffect(() => {
    updateVariableNames(currText); // Use the debounced function
  }, [currText]);

  // Handle the change in the text input
  const handleTextChange = (e) => {
    setCurrText(e.target.value);
  };

  // Dynamically resize the input box vertically
  const resizeTextArea = (e) => {
    e.target.style.height = "auto"; // Reset height to auto
    e.target.style.height = `${e.target.scrollHeight}px`; // Set to scrollHeight to auto expand
  };

  // Create the content for the text node
  const content = (
    <div className="space-y-2">
      <div className="flex items-center space-x-2">
        <label className="node-label">Text:</label>
        <textarea
          value={currText}
          onChange={handleTextChange}
          onInput={resizeTextArea} // Resize text area on input
          className="node-input resize-none" // Disable manual resizing
          rows="1" // Set initial row count
        />
      </div>
    </div>
  );

  // Handles for output and retrigger
  const handles = [
    { type: "source", position: "right", id: "output" },
    { type: "target", position: "top", id: "retrigger" },
  ];

  // Calculate the top positioning for the variable handles based on the number of handles
  const calculateHandlePosition = (index, totalHandles) => {
    if (totalHandles === 1) {
      return "50%"; // Center the handle vertically
    }
    // Equidistant positioning for multiple handles
    return `${(100 * (index + 1)) / (totalHandles + 1)}%`;
  };

  // Add a handle for each variable detected in the text input
  const variableHandles = variableNames.map((variable, index) => ({
    type: "target", // Ensure target type for accepting connections
    position: "left",
    id: `variable_${variable}_${index}`, // Ensure a unique ID for each variable and handle
    title: variable,
    style: {
      top: calculateHandlePosition(index, variableNames.length),
    },
  }));

  // Combine the original handles with the variable handles
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
