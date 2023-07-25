import React from "react";
import { Sidebar } from "../components/Sidebar";
import "./ProfilePage.css";

const ProfilePage = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="w-5/6">
        <div className="muro h-44"></div>

        <div className="text-black">Perfil</div>
      </div>
    </div>
  );
};

export default ProfilePage;
/*
 */
