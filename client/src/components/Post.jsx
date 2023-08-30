import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { formatDistanceToNow } from "date-fns";
import { es } from "date-fns/locale";
import { useAuth } from "../context/AuthContext";
import { usePosts } from "../context/PostsContext";
import { darLike, quitarLike, getLikes } from "../api/posts";
import { CheckBadgeIcon, HeartIcon } from "@heroicons/react/24/outline";
import { HeartIcon as HeartIconSolid } from "@heroicons/react/24/solid";

const Post = (props) => {
  const { user } = useAuth();
  const { posts, verPosts } = usePosts();

  var avatarUrl = "https://api.multiavatar.com/";

  var postsSeleccionados = posts;

  if (props.userSeleccionado) {
    postsSeleccionados = posts.filter(
      (post) => post.userId._id === props.userSeleccionado
    );
  }

  const [elementStates, setElementStates] = useState(
    postsSeleccionados.map(() => false)
  );

  const toggleElement = (index) => {
    const newElementStates = [...elementStates];
    newElementStates[index] = !newElementStates[index];
    setElementStates(newElementStates);
  };

  useEffect(() => {
    verPosts();
  }, []);

  return (
    <>
      <div className="text-black">
        {postsSeleccionados.map((post, index) => (
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
                <span className="font-medium">@{post.userId.username}</span>
                <CheckBadgeIcon className="ml-1 text-yellow-400 h-6 w-6" />
              </div>
            </Link>
            <div className="py-8">{post.text}</div>
            <div className="flex">
              <div className="flex">
                {post.likes.length}

                {post.likes.some((userId) => userId === user.id) ? (
                  <button
                    onClick={() => {
                      quitarLike(post._id);
                      toggleElement(index);
                    }}
                  >
                    {elementStates[index] ? (
                      <HeartIcon className="ml-1 text-red-500 h-5 w-5 ju" />
                    ) : (
                      <HeartIconSolid className="ml-1 text-red-500 h-5 w-5" />
                    )}
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      darLike(post._id);
                      toggleElement(index);
                    }}
                  >
                    {elementStates[index] ? (
                      <HeartIconSolid className="ml-1 text-red-500 h-5 w-5" />
                    ) : (
                      <HeartIcon className="ml-1 text-red-500 h-5 w-5" />
                    )}
                  </button>
                )}
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
        ))}
      </div>
    </>
  );
};

export default Post;
