import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import {
  ArrowLeftOnRectangleIcon,
  HomeIcon,
  UserCircleIcon,
} from "@heroicons/react/20/solid";

export function Sidebar() {
  const { user, logout } = useAuth();

  var avatarUrl = "https://api.multiavatar.com/" + user.username + ".svg";

  return (
    <>
      <aside
        id="default-sidebar"
        className="fixed flex-initial top-0 left-0 z-40 w-1/6 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidenav"
      >
        <div className="overflow-y-auto py-5 px-3 h-full bg-white border-r border-gray-200">
          <ul className="pb-5 mb-5 space-y-2 border-b border-gray-200">
            <li>
              <a className="flex items-center p-2 text-base font-normal text-gray-900 group">
                <div className=" w-10 h-10 rounded-full">
                  <img src={avatarUrl} />
                </div>
                <span className="ml-3">@{user.username}</span>
              </a>
            </li>
          </ul>
          <ul className="space-y-2">
            <li>
              <Link
                to={"/"}
                className="flex items-center cursor-pointer p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 group"
              >
                <HomeIcon
                  className=" h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
                <span className="ml-3">Inicio</span>
              </Link>
            </li>
            <li>
              <Link
                to={"/profile"}
                className="flex items-center cursor-pointer p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 group"
              >
                <UserCircleIcon
                  className=" h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
                <span className="ml-3">Perfil</span>
              </Link>
            </li>
          </ul>
          <ul className="absolute bottom-0 py-5 space-y-2 border-t border-gray-200">
            <li>
              <Link
                to={"/login"}
                onClick={() => {
                  logout();
                }}
                className="flex items-center cursor-pointer p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 group"
              >
                <ArrowLeftOnRectangleIcon
                  className=" h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
                <span className="ml-3">Cerrar sesión</span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
}
