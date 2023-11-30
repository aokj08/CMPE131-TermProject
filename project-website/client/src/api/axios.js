import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:1337/api/",
});

export const getContents = async () => {
  try {
    const response = await api.get("search-contents");
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
