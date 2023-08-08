import React from "react";
import Dummy from "../components/Dummy";
import Posts from "../components/Posts";
import {
  HomeIcon,
  UserIcon,
  BellAlertIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/outline";

const TestPage = () => {
  return (
    <div className="flex flex-col h-screen overflow-hidden text-black">
      <nav className="bg-white p-4 drop-shadow-sm">Navbar</nav>

      <div className="flex flex-1 overflow-hidden">
        <div className="w-1/4 p-8 overflow-y-auto">
          <div className="bg-white mb-8 rounded-2xl p-4 drop-shadow-sm">
            <ul>
              <li className="flex p-3 my-2 cursor-pointer hover:bg-gray-50 rounded-2xl text-sky-500">
                <HomeIcon className="h-6 w-6" />
                <span className="pl-4">Inicio</span>
              </li>
              <li className="flex p-3 my-2 cursor-pointer hover:bg-gray-50 rounded-2xl">
                <UserIcon className="h-6 w-6" />
                <span className="pl-4">Perfil</span>
              </li>
              <li className="flex p-3 my-2 cursor-pointer hover:bg-gray-50 rounded-2xl">
                <BellAlertIcon className="h-6 w-6" />
                <span className="pl-4">Notificaciones</span>
              </li>
              <li className="flex p-3 my-2 cursor-pointer hover:bg-gray-50 rounded-2xl">
                <Cog6ToothIcon className="h-6 w-6" />
                <span className="pl-4">Ajustes</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex-1 p-8 overflow-y-auto">
          <Posts />
        </div>

        <div className="w-1/4 p-8 overflow-y-auto">
          <Dummy />
          <Dummy />
          <Dummy />
          <Dummy />
        </div>
      </div>
    </div>
  );
};

export default TestPage;
