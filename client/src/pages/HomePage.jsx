import React, { useState } from "react";
import Posts from "../components/Posts";
import Navbar from "../components/Navbar";
import SidebarMenu from "../components/SidebarMenu";
import WidgetHora from "../components/widgets/WidgetHora";

const HomePage = () => {
  const [numPosts, setNumPosts] = useState(0);

  const getNumPosts = (data) => {
    setNumPosts(1);
    setNumPosts(data);
  };

  return (
    <div className="flex flex-col h-screen overflow-hidden text-black">
      <Navbar />

      <div className="flex flex-1 overflow-hidden">
        <div className="w-1/4 px-8 overflow-y-auto">
          <SidebarMenu />
        </div>

        <div className="flex-1 px-8 overflow-y-auto">
          <Posts userSeleccionado={"all"} numPostsUser={getNumPosts} />
        </div>

        <div className="w-1/4 px-8 overflow-y-auto"></div>
      </div>
    </div>
  );
};

export default HomePage;
