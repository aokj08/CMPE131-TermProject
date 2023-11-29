import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:1337/api/",
});

export const getContents = async () => {
  const response = await api.get("search-contents");
  return response.data;
};
