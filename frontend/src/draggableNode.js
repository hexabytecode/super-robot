import "./styles/nodeStyles.css";

export const DraggableNode = ({ type, label, icon }) => {
  const onDragStart = (event, nodeType) => {
    const appData = { nodeType };
    event.target.style.cursor = "grabbing";
    event.dataTransfer.setData(
      "application/reactflow",
      JSON.stringify(appData)
    );
    event.dataTransfer.effectAllowed = "move";
  };

  const onDragEnd = (event) => {
    event.target.style.cursor = "grab";
  };

  return (
    <div
      className={"draggableNodes"}
      onDragStart={(event) => onDragStart(event, type)}
      onDragEnd={onDragEnd}
      draggable
    >
      {icon && <span className="text-lg mb-1">{icon}</span>}
      <span className="text-sm">{label}</span>
    </div>
  );
};
