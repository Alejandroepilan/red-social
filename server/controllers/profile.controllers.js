import User from "../models/user.model.js";

// Controlador para obtener el perfil de un usuario
export const getUserProfile = async (req, res) => {
  const username = req.params.username;

  try {
    const user = await User.findOne({ username }).select("-password");

    if (!user) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }

    // Aquí puedes devolver solo los datos relevantes para el perfil del usuario
    const userProfile = {
      _id: user._id,
      username: user.username,
      createdAt: user.createdAt,
      // Agrega aquí otros campos relevantes para el perfil
    };

    res.status(200).json(userProfile);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener el perfil del usuario" });
  }
};
