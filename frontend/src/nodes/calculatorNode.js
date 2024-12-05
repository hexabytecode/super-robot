import NodeBase from "./nodeBase";

export const CalculatorNode = ({ id }) => {
  const content = <div>Simple calculator node.</div>;

  const handles = [
    {
      type: "target",
      position: "left",
      id: "input1",
      style: { top: `${100 / 3}%` },
    },
    {
      type: "target",
      position: "left",
      id: "input2",
      style: { top: `${200 / 3}%` },
    },
    { type: "source", position: "right", id: "result" },
  ];

  return (
    <NodeBase
      id={id}
      type="calculator"
      title="Calculator"
      content={content}
      handles={handles}
    />
  );
};
