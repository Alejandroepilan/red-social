import axios from './axios.js';

export const getMessages = messages => axios.get(`/get-messages`, messages);
export const sendNewPost = content => axios.post(`/create-post`, content);