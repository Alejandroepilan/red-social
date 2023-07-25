import React from "react";
//import { Navbar } from "../components/Navbar";
import { Sidebar } from "../components/Sidebar";

const HomePage = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />

      <div className="text-black">Inicio</div>
    </div>
  );
};

export default HomePage;
