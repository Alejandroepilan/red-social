import React, { useEffect } from "react";
import { useMessage } from "../context/MessageContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCertificate, faHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";

const Post = () => {
  const { messages, verMessages } = useMessage();

  var avatarUrl = "https://api.multiavatar.com/";

  useEffect(() => {
    verMessages();
  }, []);

  return (
    <>
      <div className="my-24 max-w-sm">
        {messages.map((message) => (
          <div
            className="ring-1 ring-gray-50 shadow-md rounded-lg py-10 mb-10"
            key={message._id}
          >
            <div className="w-10">
              <img src={avatarUrl + message.user + ".svg"} />
            </div>
            <div className="font-bold">
              {message.user}
              <FontAwesomeIcon
                icon={faCertificate}
                className="text-cyan-400 ml-1"
              />
            </div>
            <div>{message.text}</div>
            <div className="mt-2">
              {message.likes}

              {message.liked ? (
                <FontAwesomeIcon icon={faHeart} className="text-red-500 ml-1" />
              ) : (
                <FontAwesomeIcon
                  icon={faHeartRegular}
                  className="text-red-500 ml-1"
                />
              )}
            </div>
            <div className="mt-5 text-xs">{message.createdAt}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Post;
