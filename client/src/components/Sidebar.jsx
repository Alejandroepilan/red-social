import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleUser,
  faHouse,
  faPowerOff,
  faCommentDots,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  const { user, logout } = useAuth();

  var avatarUrl = "https://api.multiavatar.com/" + user.username + ".svg";
  return (
    <>
      <aside
        id="default-sidebar"
        className="fixed flex-initial top-0 left-0 w-1/6 h-screen transition-transform -translate-x-full sm:translate-x-0"
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
                <FontAwesomeIcon
                  icon={faHouse}
                  className=" h-5 w-5 text-black"
                  aria-hidden="true"
                />
                <span className="ml-3">Inicio</span>
              </Link>
            </li>
            <li>
              <Link
                to={`/u/${user.username}`}
                className="flex items-center cursor-pointer p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 group"
              >
                <FontAwesomeIcon
                  icon={faCircleUser}
                  className=" h-5 w-5 text-black"
                />
                <span className="ml-3">Perfil</span>
              </Link>
            </li>
            <li>
              <Link
                to={`/chats`}
                className="flex items-center cursor-pointer p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 group"
              >
                <FontAwesomeIcon
                  icon={faCommentDots}
                  className=" h-5 w-5 text-black"
                />
                <span className="ml-3">Chats</span>
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
                <FontAwesomeIcon
                  icon={faPowerOff}
                  className=" h-5 w-5 text-black"
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
};

export default Sidebar;
