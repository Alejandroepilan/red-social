import React from "react";
import NewPostBoton from "./navbar/NewPostBoton";
import AccountBoton from "./navbar/AccountBoton";
import Searchbar from "./navbar/Searchbar";
import Brand from "./navbar/Brand";

const Navbar = () => {
  return (
    <div>
      <nav className="grid grid-cols-3 bg-white py-4 px-6 mb-8 shadow ring-1 ring-black ring-opacity-5">
        <div className="flex items-center justify-start">
          <Brand />
        </div>
        <div className="relative flex items-center justify-center mx-20">
          <Searchbar />
        </div>
        <div className="flex items-center justify-end">
          <NewPostBoton />
          <AccountBoton />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
