import axios from "axios";

const API_BASE_URL = "http://localhost:5000/api";

export const getArticles = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/news`);
    return response.data;
  } catch (error) {
    console.error("getArticles 실패", error);
    return [];
  }
};

export const loginUser = async (inputId, inputPw) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/login`, {
      inputId,
      inputPw,
    });

    return response.data;
  } catch (error) {
    console.error("loginUser 실패", error);
    return { loggedIn: false };
  }
};

export const logoutUser = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/logout`, {});
    return response.data;
  } catch (error) {
    console.error("logoutUser 실패", error);
    return { loggedIn: true };
  }
};

export const checkSession = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/check-session`);
    return response.data;
  } catch (error) {
    console.error("checkSession 실패", error);
    return { loggedIn: false };
  }
};
