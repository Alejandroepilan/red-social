import React from "react";
//import { Navbar } from "../components/Navbar";
import { Sidebar } from "../components/Sidebar";

const HomePage = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />

      <div className="flex-initial text-black">Inicio</div>
    </div>
  );
};

export default HomePage;
