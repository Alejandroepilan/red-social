import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const Searchbar = () => {
  return (
    <>
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none ">
        <MagnifyingGlassIcon className="h-5 w-5 absolute text-gray-400" />
      </div>
      <input
        type="search"
        className="block w-full bg-gray-50 rounded-2xl h-full px-4 pl-10 focus:outline-none shadow-sm ring-1 ring-black ring-opacity-5"
        placeholder="Buscar"
      />
    </>
  );
};

export default Searchbar;
