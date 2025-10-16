import axios from 'axios';

const BASE_URL = "http://localhost:5000";

export const generateImg = async (id: string, prompt: string) => {
  const url = `${BASE_URL}/create_image`;
  const body = {
    "ID": id,
    "PROMPT": prompt
  };
  const response = await axios.post(url, body);
  return response.data;
}
