import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { searchProfile } from "../../api/profile";

const Searchbar = () => {
  const [profilesFound, setProfilesFound] = useState([]);

  const handleSearchProfile = async (event) => {
    const value = event.target.value;

    try {
      const nuevosResultados = searchProfile(value).then((res) => {
        console.log(res);
      });
      setProfilesFound(nuevosResultados);

      //console.log(nuevosResultados);
    } catch (error) {
      console.error("Error al buscar usuarios:", error);
    }
  };

  return (
    <>
      {/*<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none ">
        <MagnifyingGlassIcon className="h-5 w-5 absolute text-gray-400" />
      </div>
      <input
        type="search"
        className="block w-full bg-gray-50 rounded-2xl h-full px-4 pl-10 focus:outline-none shadow-sm ring-1 ring-black ring-opacity-5"
        placeholder="Buscar"
      />*/}

      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none ">
        <MagnifyingGlassIcon className="h-5 w-5 absolute text-gray-400" />
      </div>
      <input
        type="search"
        className=" w-full bg-gray-50 rounded-2xl h-full px-4 pl-10 focus:outline-none shadow ring-1 ring-black ring-opacity-5"
        placeholder="Buscar"
      />

      <div className="absolute mt-44 w-full p-2 bg-white rounded-2xl shadow ring-1 ring-black ring-opacity-5">
        <Link to={"/"}>
          <div className="px-4 py-2 text-sm rounded-xl hover:bg-gray-50">
            Resultado 1
          </div>
        </Link>
        <Link to={"/"}>
          <div className="px-4 py-2 text-sm rounded-xl hover:bg-gray-50">
            Resultado 1
          </div>
        </Link>
        <Link to={"/"}>
          <div className="px-4 py-2 text-sm rounded-xl hover:bg-gray-50">
            Resultado 1
          </div>
        </Link>
        <ul>
          {Array.isArray(profilesFound) &&
            profilesFound.map((usuario) => (
              <li key={usuario._id}>{usuario.username}</li>
            ))}
        </ul>
      </div>
    </>
  );
};

export default Searchbar;
