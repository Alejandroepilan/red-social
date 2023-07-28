import React, { useState, useEffect } from "react";
import axios from "axios";

const UserProfile = ({ match }) => {
  const [userProfile, setUserProfile] = useState({});

  useEffect(() => {
    // Hacer una solicitud para obtener el perfil del usuario
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get(
          `/api/perfil/${match.params.username}`
        );
        setUserProfile(response.data);
      } catch (error) {
        console.error("Error al obtener el perfil del usuario", error);
      }
    };

    fetchUserProfile();
  }, [match.params.username]);

  return (
    <div>
      <h2>Perfil de {userProfile.username}</h2>
      {/* Mostrar otros detalles del perfil aquí */}
    </div>
  );
};

export default UserProfile;
