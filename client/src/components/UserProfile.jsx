import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { usePosts } from "../context/PostsContext";
import { getProfile } from "../api/profile";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import "../pages/ProfilePage.css";

import Dummy from "../components/Dummy";
import Posts from "../components/Posts";
import Navbar from "../components/Navbar";
import SidebarMenu from "../components/SidebarMenu";

const UserProfile = () => {
  const [userProfile, setUserProfile] = useState({});
  const { user } = useAuth();
  const { posts, verPosts } = usePosts();
  const { username } = useParams();
  const navigate = useNavigate();

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

  var avatarUrl =
    "https://api.multiavatar.com/" + userProfile.username + ".svg";

  const publicacionesDelUsuario = posts.filter(
    (post) => post.userId._id === userProfile._id
  );

  return (
    <div className="flex flex-col h-screen overflow-hidden text-black">
      <Navbar />

      <div className="flex flex-1 overflow-hidden">
        <div className="w-1/4 px-8 overflow-y-auto">
          <SidebarMenu />
        </div>

        <div className="flex-1 px-8 overflow-y-auto">
          <div className="bg-white drop-shadow-sm rounded-2xl p-6 mb-8">
            <div className="h-48 w-full rounded-2xl muro flex flex-col justify-end">
              <div className="relative h-20 w-20 rounded-2xl mt-auto m-5">
                <img className="" src={avatarUrl} />
              </div>
            </div>
            <div className="text-black m-5">
              @{userProfile.username}
              <FontAwesomeIcon
                icon={faCircleCheck}
                className="text-yellow-400 ml-1 bg-white rounded-full"
              />
            </div>
            <div className="flex flex-colinline-block m-5">
              {/*<div>10 Seguidores</div>*/}
              <div>{publicacionesDelUsuario.length} Publicaciones</div>
            </div>
          </div>

          <Posts userSeleccionado={userProfile._id} />
        </div>

        <div className="w-1/4 px-8 overflow-y-auto">
          <Dummy />
          <Dummy />
          <Dummy />
          <Dummy />
        </div>
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
