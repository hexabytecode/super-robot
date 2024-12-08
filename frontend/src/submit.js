import { useStore } from "./store";
import { submitPipeline } from "./helpers/api";
import { useNotification } from "./helpers/useNotification";

export const SubmitButton = () => {
  const { nodes, edges, reset } = useStore();
  const { notify } = useNotification();

  const handleSubmit = async () => {
    try {
      const { num_nodes, num_edges, is_dag } = await submitPipeline(
        nodes,
        edges
      );

      const message = `Pipeline contains ${num_nodes} nodes and ${num_edges} edges. ${
        is_dag
          ? "It is a valid Directed Acyclic Graph (DAG)."
          : "It is not a Directed Acyclic Graph (DAG)."
      }`;

      notify(message, is_dag ? "success" : "error");
    } catch (error) {
      console.error("Error submitting pipeline:", error);
      notify("Failed to submit the pipeline. Please try again.", "error");
    }
  };

  const handleReset = () => {
    reset();
    notify("Pipeline reset successfully.", "info");
  };

  return (
    <div className="flex items-center justify-center py-6 bg-white">
      <button type="reset" className="btn reset" onClick={handleReset}>
        Reset ↻
      </button>
      <button type="button" className="btn submit" onClick={handleSubmit}>
        Run ▸
      </button>
    </div>
  );
};
