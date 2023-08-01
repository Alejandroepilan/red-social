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
import viteLogo from "../../public/vite.svg";

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
        <div className="overflow-y-auto py-5 px-3 h-full border-r border-neutral-800">
          <div className="flex py-5 space-y-2">
            <div>
              <img src={viteLogo} />
            </div>
            <div className="">
              <a className="font-bold pl-3 flex justify-center items-center">
                Red Social
              </a>
            </div>
          </div>
          <ul className="space-y-2">
            <li>
              <Link
                to={"/"}
                className="flex items-center cursor-pointer p-2 text-base font-normal text-neutral-200 rounded-lg hover:bg-neutral-600 group"
              >
                <FontAwesomeIcon
                  icon={faHouse}
                  className="h-5 w-5 text-neutral-50"
                  aria-hidden="true"
                />
                <span className="ml-3">Inicio</span>
              </Link>
            </li>
            <li>
              <Link
                to={`/u/${user.username}`}
                className="flex items-center cursor-pointer p-2 text-base font-normal text-neutral-200 rounded-lg hover:bg-neutral-600 group"
              >
                <FontAwesomeIcon
                  icon={faCircleUser}
                  className="h-5 w-5 text-neutral-50"
                />
                <span className="ml-3">Perfil</span>
              </Link>
            </li>
            <li>
              <Link
                to={`/chats`}
                className="flex items-center cursor-pointer p-2 text-base font-normal text-neutral-200 rounded-lg hover:bg-neutral-600 group"
              >
                <FontAwesomeIcon
                  icon={faCommentDots}
                  className="h-5 w-5 text-neutral-50"
                />
                <span className="ml-3">Chats</span>
              </Link>
            </li>
            <li>
              <Link
                to={"/login"}
                onClick={() => {
                  logout();
                }}
                className="flex items-center cursor-pointer p-2 text-base font-normal text-neutral-200 rounded-lg hover:bg-neutral-600 group"
              >
                <FontAwesomeIcon
                  icon={faPowerOff}
                  className="h-5 w-5 text-neutral-50"
                  aria-hidden="true"
                />
                <span className="ml-3">Cerrar sesión</span>
              </Link>
            </li>
          </ul>
          <ul className="absolute bottom-0 py-5 space-y-2">
            <li>
              <a className="flex items-center p-2 text-base font-normal text-neutral-200 group">
                <div className=" w-10 h-10 rounded-full">
                  <img src={avatarUrl} />
                </div>
                <span className="ml-3">@{user.username}</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;

/* <li>
              <Link
                to={"/login"}
                onClick={() => {
                  logout();
                }}
                className="flex items-center cursor-pointer p-2 text-base font-normal text-neutral-200 rounded-lg hover:bg-neutral-600 group"
              >
                <FontAwesomeIcon
                  icon={faPowerOff}
                  className="h-5 w-5 text-neutral-50"
                  aria-hidden="true"
                />
                <span className="ml-3">Cerrar sesión</span>
              </Link>
            </li>
  */
