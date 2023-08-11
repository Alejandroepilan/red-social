import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import NewPostBoton from "./NewPostBoton";
import { useAuth } from "../context/AuthContext";
import viteLogo from "../../public/vite.svg";

const Navbar = () => {
  const { user } = useAuth();
  var avatarUrl = "https://api.multiavatar.com/" + user.username + ".svg";

  return (
    <div>
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
          <NewPostBoton />
          <img src={avatarUrl} className="w-10 h-10 ml-5 rounded-full" />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
