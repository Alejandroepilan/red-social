import axios from "./axios.js";

export const getPosts = (userId) => axios.get(`/get-posts/${userId}`);
export const createNewPost = (content) => axios.post(`/create-post`, content);

export const darLike = (postId) => axios.patch(`/dar-like/${postId}`);
export const quitarLike = (postId) => axios.patch(`/quitar-like/${postId}`);
export const getLikes = (postId) => axios.get(`/get-likes/${postId}`);
