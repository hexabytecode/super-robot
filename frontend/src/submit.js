import axios from "axios";
import { useStore } from "./store";
import { useSnackbar } from "notistack";

export const SubmitButton = () => {
  const { nodes, edges } = useStore();
  const { enqueueSnackbar } = useSnackbar();

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/pipelines/parse",
        {
          nodes,
          edges,
        }
      );
      const { num_nodes, num_edges, is_dag } = response.data;

      const message = `Pipeline contains ${num_nodes} nodes and ${num_edges} edges. ${
        is_dag
          ? "It is a valid Directed Acyclic Graph (DAG)."
          : "It is not a Directed Acyclic Graph (DAG)."
      }`;

      enqueueSnackbar(message, {
        variant: is_dag ? "success" : "error",
      });
    } catch (error) {
      console.error("Error submitting pipeline:", error);
      enqueueSnackbar("Failed to submit the pipeline. Please try again.", {
        variant: "error",
      });
    }
  };

  return (
    <div className="flex items-center justify-center mt-4 shadow-top-md">
      <button type="reset" className="btn reset">
        Reset ↻
      </button>
      <button type="button" className="btn submit" onClick={handleSubmit}>
        Run ▸
      </button>
    </div>
  );
};
