import React from "react";
import Dummy from "../components/Dummy";
import Posts from "../components/Posts";
import {
  HomeIcon,
  UserIcon,
  BellAlertIcon,
  Cog6ToothIcon,
  MagnifyingGlassIcon,
  PlusCircleIcon,
} from "@heroicons/react/24/outline";
import { useAuth } from "../context/AuthContext";
import viteLogo from "../../public/vite.svg";

const TestPage = () => {
  const { user } = useAuth();
  var avatarUrl = "https://api.multiavatar.com/" + user.username + ".svg";

  return (
    <div className="flex flex-col h-screen overflow-hidden text-black">
      <nav className="grid grid-cols-3 bg-white py-4 px-6 mb-8 drop-shadow-sm shadow-sm">
        <div className="flex items-center justify-start">
          <img src={viteLogo} />
          <a className="flex items-center pl-2 font-bold">Red Social</a>
        </div>
        <div className="relative flex items-center justify-center">
          <MagnifyingGlassIcon className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Buscar"
            className="bg-gray-50 rounded-2xl h-full px-4 pl-10 focus:outline-none"
          />
        </div>
        <div className="flex items-center justify-end">
          <button className="flex items-center px-3 h-full bg-yellow-300 rounded-2xl">
            <PlusCircleIcon className="h-6 w-6" />
            <a className="pl-1">Crear</a>
          </button>
          <img src={avatarUrl} className="w-10 h-10 ml-5 rounded-full" />
        </div>
      </nav>

      <div className="flex flex-1 overflow-hidden">
        <div className="w-1/4 px-8 overflow-y-auto">
          <div className="bg-white mb-8 rounded-2xl p-4 drop-shadow-sm">
            <ul>
              <li className="flex p-3 my-2 cursor-pointer hover:bg-gray-50 rounded-2xl text-yellow-400">
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

        <div className="flex-1 px-8 overflow-y-auto">
          <Posts />
        </div>

        <div className="w-1/4 px-8 overflow-y-auto">
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

/*
<div className="absolute inset-0 flex justify-center items-center z-10">
  <div className="absolute w-60 h-full bg-red-500 opacity-5"></div>
  <div className="absolute h-1 w-full bg-red-500"></div>
</div>
*/
