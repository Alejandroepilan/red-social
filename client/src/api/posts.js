import axios from "./axios.js";

export const getPosts = (posts) => axios.get(`/get-posts`, posts);
export const createNewPost = (content) => axios.post(`/create-post`, content);

export const darLike = (postId) => axios.post(`/dar-like/${postId}`);
export const quitarLike = (postId) => axios.post(`/quitar-like/${postId}`);
