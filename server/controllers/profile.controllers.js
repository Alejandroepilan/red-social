import User from "../models/user.model.js";
import UserProfile from "../models/userProfile.model.js";

export const getUserProfile = async (req, res) => {
  const username = req.params.username;

  try {
    const user = await User.findOne({ username }).select("-password");

    if (!user) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }

    const userProfile = {
      _id: user._id,
      username: user.username,
      createdAt: user.createdAt,
    };

    res.status(200).json(userProfile);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener el perfil del usuario" });
  }
};

/* CREAR PERFIL DE USUARIO TEST */

export const createTestProfile = async (req, res) => {
  const newProfile = new UserProfile();

  await newProfile.save();

  return res.status(200).json("Created!");
};

export const updateProfile = async (req, res) => {
  const { bio } = req.body;
  const userId = req.user.id;

  try {
    /*const perfil = UserProfile.findOne({ userId: userId }).then(
      (profileFound) => {
        console.log(profileFound);
      }
    );*/

    UserProfile.updateOne({ userId: userId }, { bio: bio }).then((result) => {
      console.log(result);
    });

    return res.status(200).json("Updated!");
  } catch (error) {
    return res.json({ error });
  }
};

export const getProfile = async (req, res) => {
  const username = req.user.id;
  console.log(username);

  return res.status(200).json("va!");
};
