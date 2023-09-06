import axios from "./axios.js";

export const getProfile = (user) => axios.get(`/profile/get/${user}`);
export const checkUsername = (user) =>
  axios.get(`/profile/check-username/${user}`);

export const followUser = (userId) => axios.put(`/follow/${userId}`);
