import axios from './axios.js';

export const getMessages = messages => axios.get(`/get-messages`, messages);
//export const loginRequest = user => axios.post(`/login`, user);