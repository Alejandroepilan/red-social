import User from "../models/user.model.js";
import UserProfile from "../models/userProfile.model.js";

export const getUserProfile = async (req, res) => {
  const usernameReq = req.params.username;

  try {
    const user = await User.findOne({ username: usernameReq }).select(
      "-password"
    );

    const userProfile = await UserProfile.findOne({
      userId: user._id,
    });

    if (!user || !userProfile) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }

    const userProfileDatos = {
      _id: user._id,
      username: user.username,
      createdAt: user.createdAt,
      followers: userProfile.followers,
      following: userProfile.following,
    };

    res.status(200).json(userProfileDatos);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener el perfil del usuario" });
  }
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

export const checkUsername = async (req, res) => {
  const usernameReq = req.params.username;

  try {
    User.findOne({ username: usernameReq })
      .select("username")
      .then((result) => {
        if (result !== null) {
          return res.json(true);
        } else {
          return res.json(false);
        }
      });
  } catch (error) {
    return res.status(500).json({ error });
  }
};

export const searchProfile = async (req, res) => {
  const usernameReq = req.params.username;

  const regex = new RegExp(`^${usernameReq}`, "i");
  const filtro = { ["username"]: regex };

  await User.find(filtro)
    .select("username")
    .then((res) => {
      console.log(res);
    });

  return res.status(200);
};

export const followUser = async (req, res) => {
  const followerUserId = req.user.id;
  const userId = req.params.userid;

  try {
    const userToFollow = UserProfile.findOne({ userId: userId });

    userToFollow
      .findOne({ followers: { $in: [followerUserId] } })
      .then((isFollowing) => {
        if (!isFollowing) {
          UserProfile.findOneAndUpdate(
            { userId: followerUserId },
            { $push: { following: userId } }
          ).then();

          UserProfile.findOneAndUpdate(
            { userId: userId },
            { $push: { followers: followerUserId } }
          ).then(() => {
            return res.status(200).json("Following!");
          });
        } else {
          return res.status(400).json("Ya le seguia!");
        }
      });
  } catch (error) {
    return res.status(500).json(error);
  }
};

export const unfollowUser = async (req, res) => {
  const followerUserId = req.user.id;
  const userId = req.params.userid;

  try {
    const userToFollow = UserProfile.findOne({ userId: userId });

    userToFollow
      .findOne({ followers: { $in: [followerUserId] } })
      .then((isFollowing) => {
        if (isFollowing) {
          UserProfile.findOneAndUpdate(
            { userId: followerUserId },
            { $pull: { following: userId } }
          ).then();

          UserProfile.findOneAndUpdate(
            { userId: userId },
            { $pull: { followers: followerUserId } }
          ).then(() => {
            return res.status(200).json("Unfollowing!");
          });
        } else {
          return res.status(400).json("Ya no le seguia!");
        }
      });
  } catch (error) {
    return res.status(500).json(error);
  }
};

/* CREAR PERFIL DE USUARIO TEST */

export const createTestProfile = async (req, res) => {
  const userId = req.user.id;
  const newProfile = new UserProfile({ userId: userId });

  await newProfile.save();

  return res.status(200).json("Created!");
};
