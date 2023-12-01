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

export const pushSubcribes = (email) => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      data: {
        email: email,
      },
    }),
  };

  fetch("http://localhost:1337/api/email-subcribes", requestOptions)
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
    });
};
