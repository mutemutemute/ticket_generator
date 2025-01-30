import axios from "axios";

const url = "http://localhost:3001/api/v1/tickets";

export const post = async (data) => {
  const response = await axios.post(url, data);

  return response.data;
}