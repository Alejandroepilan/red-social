import UserProfile from "../models/userProfile.model.js";

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
