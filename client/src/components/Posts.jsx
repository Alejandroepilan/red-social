import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { formatDistanceToNow } from "date-fns";
import { es } from "date-fns/locale";
import { useAuth } from "../context/AuthContext";
import { darLike, quitarLike } from "../api/posts";
import { HeartIcon } from "@heroicons/react/24/outline";
import { HeartIcon as HeartIconSolid } from "@heroicons/react/24/solid";
import ProfileBadges from "./ProfileBadges";
import { getPosts, createNewPost } from "../api/posts";

const Post = (props) => {
  const { user } = useAuth();
  const [posts, setPosts] = useState([]);
  const [liked, setLiked] = useState([]);

  var avatarUrl = "https://api.multiavatar.com/";

  const handleDarLike = (postId) => {
    darLike(postId);
  };

  const handleQuitarLike = (postId) => {
    quitarLike(postId);
  };

  const handleLikeButton = () => {
    setLiked(!liked);
  };

  props.numPostsUser(posts.length);

  useEffect(() => {
    getPosts(props.userSeleccionado).then((res) => {
      setPosts(res.data);
    });
  }, []);

  return (
    <>
      <div className="text-black">
        {posts.map((post, index) => (
          <>
            <div
              className="bg-white shadow rounded-2xl p-6 mb-8 ring-1 ring-black ring-opacity-5"
              key={post._id}
            >
              <Link
                to={`/u/${post.userId.username}`}
                className="flex hover:underline"
              >
                <div className=" w-10">
                  <img src={avatarUrl + post.userId.username + ".svg"} />
                </div>
                <div className=" flex items-center pl-2">
                  <span className="font-medium mr-1">
                    @{post.userId.username}
                  </span>
                  <ProfileBadges />
                </div>
              </Link>
              <div className="py-8">{post.text}</div>
              <div className="flex">
                <div className="flex">
                  {post.likes.length}

                  <button
                    onClick={() => {
                      handleLikeButton(post._id);
                    }}
                  >
                    {post.likes.some((userId) => userId === user.id) ? (
                      <HeartIconSolid className="ml-1 text-red-500 h-5 w-5" />
                    ) : (
                      <HeartIcon className="ml-1 text-red-500 h-5 w-5" />
                    )}
                  </button>
                </div>
                <div className="text-xs flex items-center">
                  <a className="px-2">•</a>
                  {formatDistanceToNow(new Date(post.createdAt), {
                    addSuffix: true,
                    locale: es,
                  })}
                </div>
              </div>
            </div>
            {/*<div className="bg-white shadow rounded-2xl p-6 mb-8 mx-12 ring-1 ring-black ring-opacity-5"></div>*/}
          </>
        ))}
      </div>
    </>
  );
};

export default Post;

{
  /*post.likes.some((userId) => userId === user.id) ? (
                  <button
                    onClick={() => {
                      handleQuitarLike(post._id);
                    }}
                  >
                    <HeartIconSolid className="ml-1 text-red-500 h-5 w-5" />
                  </button>
                ) : (
                  <button onClick={() => handleDarLike(post._id)}>
                    <HeartIcon className="ml-1 text-red-500 h-5 w-5" />
                  </button>
                )*/
}
