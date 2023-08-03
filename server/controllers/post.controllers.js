import User from "../models/user.model.js";
import Post from "../models/post.model.js";

export const createPost = async (req, res) => {
  const { text } = req.body;
  const userFound = await User.findById(req.user.id).select("-password");
  const userId = req.user.id;

  console.log(req.user.id);

  try {
    const newPost = new Post({
      userId,
      text,
    });

    await newPost.save();

    return res.json({ text });
  } catch (error) {
    return res.json({ error });
  }
};

export const getPosts = async (req, res) => {
  const posts = await Post.find().populate("userId", "username");

  return res.json({ posts });
};

export const darLike = async (req, res) => {
  const postId = req.params.postId;
  const userId = req.user.id;

  try {
    const liked = Post.findOne({ likes: { $in: [userId] } }).then((isLiked) => {
      if (!isLiked) {
        const postLiked = Post.findOneAndUpdate(
          { _id: postId },
          { $push: { likes: userId } }
        ).then(() => {
          return;
        });
      } else {
        console.log("tiene like");
        return;
      }
    });

    console.log(liked);
  } catch (error) {
    console.error(error);
  }

  return res.json({ message: "OK" });
};

export const quitarLike = async (req, res) => {
  const postId = req.params.postId;

  Post.findOneAndUpdate({ _id: postId }, { $pull: { likes: req.user.id } })
    .then((postActualizado) => {
      console.log(postActualizado);
    })
    .catch((error) => {
      console.error(error);
    });

  return res.json({ message: "OK" });
};
