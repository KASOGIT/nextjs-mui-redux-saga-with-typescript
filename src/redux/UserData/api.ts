import api from "../api";

const getUserData = async () => {
  try {
    const res = await api.get("https://jsonplaceholder.typicode.com/users");
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

export default {
  getUserData
};
