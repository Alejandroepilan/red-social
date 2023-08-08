import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { formatDistanceToNow } from "date-fns";
import { es } from "date-fns/locale";
import { useAuth } from "../context/AuthContext";
import { usePosts } from "../context/PostsContext";
import { darLike, quitarLike } from "../api/posts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";

const Post = (props) => {
  const { user } = useAuth();
  const { posts, verPosts } = usePosts();
  const [visualLike, setVisualLike] = useState(0);
  const [likesState, setLikesState] = useState({});

  var avatarUrl = "https://api.multiavatar.com/";

  var postsSeleccionados = posts;

  if (props.userSeleccionado) {
    postsSeleccionados = posts.filter(
      (post) => post.userId._id === props.userSeleccionado
    );
  }

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
      <div className="text-black">
        {postsSeleccionados.map((post) => (
          <div
            className="bg-white drop-shadow-sm rounded-2xl p-8 mb-8"
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
                @{post.userId.username}
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
            <div className="mt-5 text-xs">
              {formatDistanceToNow(new Date(post.createdAt), {
                addSuffix: true,
                locale: es,
              })}
            </div>
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
