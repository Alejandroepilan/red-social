import React from "react";
import Sidebar from "../components/Sidebar";
import NewPostBoton from "../components/NewPostBoton";
import Posts from "../components/Posts";

const HomePage = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />

      <div className="flex justify-center text-black w-5/6 ml-auto">
        <NewPostBoton />
        <Posts />
      </div>
    </div>
  );
};

export default HomePage;
