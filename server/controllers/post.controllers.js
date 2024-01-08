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
  const userId = req.params.userId;

  if (userId == "all") {
    const posts = await Post.find().populate("userId", "username");

    // Ordena los posts por fecha de creación (createdAt) de forma descendente (más reciente primero)
    const postsOrdenados = posts.sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );

    return res.status(200).json(postsOrdenados);
  } else {
    const posts = await Post.find({ userId: userId }).populate(
      "userId",
      "username"
    );
    return res.status(200).json(posts);
  }
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

export const getLikes = async (req, res) => {
  const postId = req.params.postId;

  Post.findById(postId)
    .select("likes")
    .then((result) => {
      return res.json(result.likes.length);
    });
};
