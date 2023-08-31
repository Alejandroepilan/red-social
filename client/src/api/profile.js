import axios from "./axios.js";

export const getProfile = (user) => axios.get(`/profile/${user}`);
export const checkUsername = (user) => axios.get(`/check-username/${user}`);
