import { createContext, useContext, useState } from "react";
import { getPosts, createNewPost } from "../api/posts";

export const PostsContext = createContext();

export const usePosts = () => {
  const context = useContext(PostsContext);
  if (!context) {
    throw new Error("usePosts must be used within an PostsProvider");
  }
  return context;
};

export const PostsProvider = ({ children }) => {
  const [posts, setposts] = useState([]);

  const verPosts = async () => {
    try {
      const res = await getPosts();
      const postsMasNuevos = res.data.posts.reverse();
      setposts(postsMasNuevos);
    } catch (error) {
      console.log(error);
    }
  };

  const newPost = async (content) => {
    try {
      await createNewPost(content);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <PostsContext.Provider
      value={{
        verPosts,
        posts,
        newPost,
      }}
    >
      {children}
    </PostsContext.Provider>
  );
};
