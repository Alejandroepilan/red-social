import React from "react";
import { Link } from "react-router-dom";
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
          <Link to={"/"} className="flex items-center justify-start">
            <img src={viteLogo} />
            <span className="flex items-center pl-2 font-bold">Red Social</span>
          </Link>
        </div>
        <div className="relative flex items-center justify-center mx-20">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <MagnifyingGlassIcon className="h-5 w-5 absolute text-gray-400" />
          </div>
          <input
            type="search"
            className="block w-full bg-gray-50 rounded-2xl h-full px-4 pl-10 focus:outline-none"
            placeholder="Buscar"
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
