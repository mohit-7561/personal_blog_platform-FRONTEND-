import axios from "axios";

const API_URL = "http://localhost:5050/api";

export const registerUser = (userData) => {
  return axios.post(`${API_URL}/auth/register`, userData);
};

export const loginUser = (userData) => {
  return axios.post(`${API_URL}/auth/login`, userData);
};

export const fetchPosts = () => {
  return axios.get(`${API_URL}/posts/myPost`);
};

export const createPost = (postData, token) => {
  return axios.post(`${API_URL}/posts/create`, postData, {
    headers: { Authorization: `Bearer ${token}` },
  });
};
