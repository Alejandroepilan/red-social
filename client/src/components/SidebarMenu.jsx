import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import {
  HomeIcon,
  UserIcon,
  BellIcon,
  Cog6ToothIcon,
  BookmarkIcon,
  ChatBubbleLeftRightIcon,
  ArrowLeftOnRectangleIcon,
} from "@heroicons/react/24/outline";

const SidebarMenu = () => {
  const { user, logout } = useAuth();

  return (
    <div>
      <div className="bg-white mb-8 rounded-2xl p-4 shadow ring-1 ring-black ring-opacity-5">
        <ul>
          <Link to={"/"}>
            <li className="flex p-3 my-2 cursor-pointer hover:bg-gray-50 rounded-2xl text-yellow-400">
              <HomeIcon className="h-6 w-6" />
              <span className="pl-4">Inicio</span>
            </li>
          </Link>
          <Link to={`/u/${user.username}`}>
            <li className="flex p-3 my-2 cursor-pointer hover:bg-gray-50 rounded-2xl">
              <UserIcon className="h-6 w-6" />
              <span className="pl-4">Perfil</span>
            </li>
          </Link>
          <Link to={"/"}>
            <li className="flex p-3 my-2 cursor-pointer hover:bg-gray-50 rounded-2xl">
              <BellIcon className="h-6 w-6" />
              <span className="pl-4">Notificaciones</span>
            </li>
          </Link>
          <Link to={"/"}>
            <li className="flex p-3 my-2 cursor-pointer hover:bg-gray-50 rounded-2xl">
              <ChatBubbleLeftRightIcon className="h-6 w-6" />
              <span className="pl-4">Chats</span>
            </li>
          </Link>
          <Link to={"/"}>
            <li className="flex p-3 my-2 cursor-pointer hover:bg-gray-50 rounded-2xl">
              <BookmarkIcon className="h-6 w-6" />
              <span className="pl-4">Guardado</span>
            </li>
          </Link>
          <Link to={"/"}>
            <li className="flex p-3 my-2 cursor-pointer hover:bg-gray-50 rounded-2xl">
              <Cog6ToothIcon className="h-6 w-6" />
              <span className="pl-4">Ajustes</span>
            </li>
          </Link>
          <Link
            to={"/login"}
            onClick={() => {
              logout();
            }}
          >
            <li className="flex p-3 my-2 cursor-pointer hover:bg-gray-50 rounded-2xl">
              <ArrowLeftOnRectangleIcon className="h-6 w-6" />
              <span className="pl-4">Cerrar sesión</span>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default SidebarMenu;
