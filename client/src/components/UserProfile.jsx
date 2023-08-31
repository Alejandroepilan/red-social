import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { usePosts } from "../context/PostsContext";
import { getProfile, checkUsername } from "../api/profile";
import {
  EnvelopeIcon,
  UserPlusIcon,
  CheckBadgeIcon,
  XMarkIcon,
  CheckIcon,
  PencilIcon,
  ShieldExclamationIcon,
} from "@heroicons/react/24/outline";
import "../pages/ProfilePage.css";
import Post from "../components/Post";
import Navbar from "../components/Navbar";
import SidebarMenu from "../components/SidebarMenu";

const UserProfile = () => {
  const [userProfile, setUserProfile] = useState({});
  const { posts, verPosts } = usePosts();
  const { username } = useParams();
  const navigate = useNavigate();
  const [editingProfile, setEditingProfile] = useState(false);
  const [usernameExists, setUsernameExists] = useState(false);

  var avatarUrl =
    "https://api.multiavatar.com/" + userProfile.username + ".svg";

  const publicacionesDelUsuario = posts.filter(
    (post) => post.userId._id === userProfile._id
  );

  const toggleEditProfile = () => {
    setEditingProfile(!editingProfile);
  };

  const handleChange = async (event) => {
    const newInputValue = event.target.value;
    const response = await checkUsername(newInputValue);
    setUsernameExists(response.data);
  };

  useEffect(() => {
    verPosts();

    const fetchUserProfile = async () => {
      try {
        const response = getProfile(username)
          .then((response2) => {
            setUserProfile(response2.data);
          })
          .catch(() => {
            navigate("/404");
          });
        console.log(response);
      } catch (error) {
        console.error("Error al obtener el perfil del usuario", error);
      }
    };

    fetchUserProfile();
  }, [username]);

  return (
    <div className="flex flex-col h-screen overflow-hidden text-black">
      <Navbar />

      <div className="flex flex-1 overflow-hidden">
        <div className="w-1/4 px-8 overflow-y-auto">
          <SidebarMenu />
        </div>

        <div className="flex-1 px-8 overflow-y-auto">
          {editingProfile ? (
            <div className="bg-white shadow rounded-2xl p-6 mb-8 ring-1 ring-black ring-opacity-5">
              <div className="grid">
                <span className="font-bold text-lg">Perfil</span>
                <span className="mt-4">
                  Esta información se mostrará públicamente, así que ten cuidado
                  con lo que compartes.
                </span>

                <span
                  className={`mt-8 ${
                    usernameExists ? "text-red-500" : "text-green-500"
                  }`}
                >
                  Nombre de usuario
                </span>
                <div className="flex">
                  <input
                    type="text"
                    className={`h-10 w-1/2 p-4 bg-gray-50 rounded-2xl focus:outline-none mt-2 ${
                      usernameExists
                        ? "ring-1 ring-red-500"
                        : "ring-1 ring-green-500"
                    }`}
                    onChange={handleChange}
                  ></input>
                  <div className="ml-2 flex items-center">
                    {usernameExists ? (
                      <XMarkIcon className="w-5 h-5 text-red-500" />
                    ) : (
                      <CheckIcon className="w-5 h-5 text-green-500" />
                    )}
                  </div>
                </div>

                <span className="mt-8">Biografía</span>
                <textarea className="p-4 h-32 bg-gray-50 rounded-2xl focus:outline-none mt-2 resize-none"></textarea>

                <div className="mt-8">
                  <button className="p-2 px-3 bg-yellow-400 rounded-2xl hover:bg-yellow-500 font-medium">
                    Guardar
                  </button>
                  <button
                    onClick={toggleEditProfile}
                    className="ml-4 font-medium"
                  >
                    Cancelar
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div>
              <div className="bg-white shadow rounded-2xl p-6 mb-8 ring-1 ring-black ring-opacity-5">
                <div className="h-48 w-full rounded-2xl muro flex flex-col justify-end">
                  <div className="relative h-20 w-20 rounded-full mt-auto ml-5 top-10 ring-4 ring-white">
                    <img className="" src={avatarUrl} />
                  </div>
                </div>

                <div className="text-black mx-5 mt-14 space-y-5">
                  <div className="flex">
                    <span className="font-medium">@{userProfile.username}</span>
                    <CheckBadgeIcon className="ml-1 text-cyan-400 h-6 w-6" />
                    <ShieldExclamationIcon className=" text-violet-600 h-6 w-6" />
                  </div>

                  <div>
                    <span>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Aenean scelerisque quam ut risus laoreet, in congue odio
                      blandit.
                    </span>
                  </div>

                  <div className="flex flex-colinline-block">
                    {/*<div>10 Seguidores</div>*/}
                    <div>
                      <span className="font-medium">0</span>
                      <span className="pl-1">Seguidores</span>
                    </div>
                    <div>
                      <span className="font-medium ml-4">0</span>
                      <span className="pl-1">Siguiendo</span>
                    </div>
                    <div>
                      <span className="font-medium ml-4">
                        {publicacionesDelUsuario.length}
                      </span>
                      <span className="pl-1">Publicaciones</span>
                    </div>
                  </div>

                  <div className="flex flex-colinline-block space-x-3">
                    <button
                      onClick={toggleEditProfile}
                      className="flex items-center px-3 py-1 h-full bg-yellow-400 rounded-2xl hover:bg-yellow-500"
                    >
                      <PencilIcon className="h-5" />
                      <a className="pl-2 font-medium">Editar perfil</a>
                    </button>

                    <button className="flex items-center px-3 py-1 h-full bg-yellow-400 rounded-2xl hover:bg-yellow-500">
                      <UserPlusIcon className="h-5" />
                      <a className="pl-2 font-medium">Seguir</a>
                    </button>

                    <button className="flex items-center px-3 py-1 h-full bg-yellow-400 rounded-2xl hover:bg-yellow-500">
                      <EnvelopeIcon className="h-5" />
                      <a className="pl-2 font-medium">Enviar mensaje</a>
                    </button>
                  </div>
                </div>
              </div>
              <Post userSeleccionado={userProfile._id} />
            </div>
          )}
        </div>

        <div className="w-1/4 px-8 overflow-y-auto"></div>
      </div>
    </div>
  );

  /*return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="w-5/6 ml-auto">
        <div className="flex items-end justify-center muro h-44">
          <div className="translate-y-[50%] w-32 h-32 rounded-full">
            <img
              className="ring-[6px] ring-stone-900 rounded-full"
              src={avatarUrl}
            />
          </div>
        </div>

        <div className="flex flex-col justify-center my-24 text-neutral-200">
          <span className="flex flex-col items-center justify-center">
            <div className="font-bold">
              @{userProfile.username}
              <FontAwesomeIcon
                icon={faCircleCheck}
                className="text-cyan-400 ml-1"
              />
            </div>
            <div className="flex flex-colinline-block mt-4">
              <div>10 Seguidores</div>
              <div className="ml-5">
                {publicacionesDelUsuario.length} Publicaciones
              </div>
            </div>
          </span>
          <div className="flex justify-center m-24">
            <Posts userSeleccionado={userProfile._id} />
          </div>
        </div>
      </div>
    </div>
  );*/
};

export default UserProfile;
