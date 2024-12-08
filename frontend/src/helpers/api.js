import axios from "axios";

export const submitPipeline = async (nodes, edges) => {
  try {
    const response = await axios.post("http://127.0.0.1:8000/pipelines/parse", {
      nodes,
      edges,
    });
    return response.data;
  } catch (error) {
    throw new Error("Failed to submit pipeline");
  }
};
