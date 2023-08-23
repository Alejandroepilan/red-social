import Post from "../models/post.model.js";

export const createPost = async (req, res) => {
  const { text } = req.body;
  const userId = req.user.id;

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
    const postSelected = Post.findById(postId);

    postSelected.findOne({ likes: { $in: [userId] } }).then((isLiked) => {
      if (!isLiked) {
        Post.findOneAndUpdate(
          { _id: postId },
          { $push: { likes: userId } }
        ).then(() => {
          return res.status(200).json("Liked!");
        });
      } else {
        return res.status(400).json("Ya tenia like");
      }
    });
  } catch (error) {
    console.error(error);
  }
};

export const quitarLike = async (req, res) => {
  const postId = req.params.postId;
  const userId = req.user.id;

  try {
    const postSelected = Post.findById(postId);

    postSelected.findOne({ likes: { $in: [userId] } }).then((isLiked) => {
      if (isLiked) {
        Post.findOneAndUpdate(
          { _id: postId },
          { $pull: { likes: userId } }
        ).then(() => {
          return res.status(200).json("Unliked!");
        });
      } else {
        return res.status(400).json("Ya no tenia like");
      }
    });
  } catch (error) {
    console.error(error);
  }
};
