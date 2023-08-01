import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { usePosts } from "../context/PostsContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";

const Post = () => {
  const { posts, verPosts } = usePosts();

  var avatarUrl = "https://api.multiavatar.com/";

  useEffect(() => {
    verPosts();
  }, []);

  return (
    <>
      <div className="my-24 max-w-sm">
        {posts.map((post) => (
          <div
            className="ring-1 ring-gray-50 shadow-md rounded-lg py-10 mb-10"
            key={post._id}
          >
            <Link to={`/u/${post.user}`} className=" hover:underline">
              <div className="w-10">
                <img src={avatarUrl + post.user + ".svg"} />
              </div>
              <div className="font-bold">
                {post.user}
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  className="text-cyan-400 ml-1"
                />
              </div>
            </Link>
            <div>{post.text}</div>
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
            <div className="mt-5 text-xs">{post.createdAt}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Post;
