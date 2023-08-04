import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { usePosts } from "../context/PostsContext";
import { darLike, quitarLike } from "../api/posts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";

const Post = () => {
  const { user } = useAuth();
  const { posts, verPosts } = usePosts();
  const [visualLike, setVisualLike] = useState(0);
  const [likesState, setLikesState] = useState({});

  var avatarUrl = "https://api.multiavatar.com/";

  useEffect(() => {
    verPosts();
  }, []);

  const handleLike = (publicacionId) => {
    const newLikesState = { ...likesState };
    newLikesState[publicacionId] = !newLikesState[publicacionId];
    setLikesState(newLikesState);
  };

  const handleDarLike = (postId) => {
    darLike(postId);
    console.log(user.id);
    //setVisualLike(+1);
  };

  const handleQuitarLike = (postId) => {
    quitarLike(postId);
    //setVisualLike(-1);
  };

  return (
    <>
      <div className="my-24 max-w-sm min-w-[300px] text-neutral-200">
        {posts.map((post) => (
          <div
            className="ring-1 ring-gray-50 shadow-md rounded-lg py-10 mb-10"
            key={post._id}
          >
            <Link
              to={`/u/${post.userId.username}`}
              className=" hover:underline"
            >
              <div className="w-10">
                <img src={avatarUrl + post.userId.username + ".svg"} />
              </div>
              <div className="font-bold">
                {post.userId.username}
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  className="text-cyan-400 ml-1"
                />
              </div>
            </Link>
            <div>{post.text}</div>
            <div className="mt-2">
              {post.likes.length + visualLike}

              {post.likes.some((userId) => userId === user.id) ? (
                <button onClick={() => handleQuitarLike(post._id)}>
                  <FontAwesomeIcon
                    icon={faHeart}
                    className="text-red-500 ml-1"
                  />
                </button>
              ) : (
                <button onClick={() => handleDarLike(post._id)}>
                  <FontAwesomeIcon
                    icon={faHeartRegular}
                    className="text-red-500 ml-1"
                  />
                </button>
              )}
            </div>
            <div className="mt-5 text-xs">{post.createdAt}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Post;

/*
<div className="mt-2">
              {post.likes}

              {post.liked ? (
                <FontAwesomeIcon icon={faHeart} className="text-red-500 ml-1" />
              ) : (
                <FontAwesomeIcon
                  icon={faHeartRegular}
                  className="text-red-500 ml-1"
                />
              )}
            </div>
*/
