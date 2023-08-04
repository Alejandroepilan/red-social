import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getProfile } from "../api/profile";
import Sidebar from "../components/Sidebar";
import Posts from "../components/Posts";
import "../pages/ProfilePage.css";

const UserProfile = () => {
  const [userProfile, setUserProfile] = useState({});
  const { username } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
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

  return (
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
          <span className="flex items-center justify-center">
            @{userProfile.username}
          </span>
          <div className="flex justify-center m-24">
            <Posts />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
