import React from "react";
import Sidebar from "../components/Sidebar";
import NewPostBoton from "../components/NewPostBoton";
import Post from "../components/Post";

const HomePage = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />

      <div className="flex justify-center text-black w-5/6 ml-auto">
        <NewPostBoton />
        <Post />
      </div>
    </div>
  );
};

export default HomePage;
