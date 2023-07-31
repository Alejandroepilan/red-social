import axios from './axios.js';

export const getProfile = user => axios.get(`/profile/${user}`);