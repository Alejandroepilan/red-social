import React, { useEffect } from "react";
//import { Navbar } from "../components/Navbar";
import { Sidebar } from "../components/Sidebar";
import { useMessage } from "../context/MessageContext";

const HomePage = () => {
  //var messages = getMessages();

  //console.log(messages);

  const { messages, verMessages } = useMessage();

  var avatarUrl = "https://api.multiavatar.com/";

  useEffect(() => {
    verMessages();
  }, []);

  console.log(messages);

  return (
    <div className="flex h-screen">
      <Sidebar />

      <div className="flex justify-center text-black w-5/6 ml-auto">
        <div className="my-24 max-w-sm">
          {messages.map((message) => (
            <div
              className="ring-1 ring-gray-50 shadow-md rounded-lg py-10 mb-10"
              key={message._id}
            >
              <div className="w-10">
                <img src={avatarUrl + message.user + ".svg"} />
              </div>
              <div className="font-bold">{message.user}</div>
              <span>{message.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;

/*
        
        
        
        */
