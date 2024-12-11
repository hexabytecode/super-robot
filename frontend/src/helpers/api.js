import axios from "axios";
import { config } from "../config";

export const submitPipeline = async (nodes, edges) => {
  try {
    const response = await axios.post(`${config.backendURL}/pipelines/parse`, {
      nodes,
      edges,
    });
    return response.data;
  } catch (error) {
    throw new Error("Failed to submit pipeline");
  }
};
