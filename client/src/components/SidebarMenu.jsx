import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import {
  HomeIcon,
  UserIcon,
  BellAlertIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/outline";

const SidebarMenu = () => {
  const { user } = useAuth();

  return (
    <div>
      <div className="bg-white mb-8 rounded-2xl p-4 drop-shadow-sm">
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
  );
};

export default SidebarMenu;
