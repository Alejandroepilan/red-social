import User from '../models/user.model.js';
import Post from '../models/post.model.js';

export const createPost = async (req, res) => {
    const { text } = req.body;
    const userFound = await User.findById(req.user.id).select('-password');
    const userId =  req.user.id

    console.log(req.user.id);

    try {
        const newPost = new Post({
            userId,
            text,
        });
    
        await newPost.save();

        return res.json({text})
    } catch (error) {
        return res.json({error})        
    }

}

export const getPosts = async (req, res) => {
    const posts = await Post.find().populate('userId', 'username')

    return res.json({posts})
}

export const darLike = async (req, res) => {
    const postId = req.params.postId;
    const userFound = await User.findById(req.user.id);
    const user =  userFound.username

    Post.findOneAndUpdate({ _id: postId }, { $push: {likes: user} })
    .then((postActualizado) => {
        console.log('Like añadido:', postActualizado);
    })
    .catch((error) => {
        console.error('Error al añadir like:', error);
    });

    return res.json({message: "OK"})
}

export const quitarLike = async (req, res) => {
    const postId = req.params.postId;
    const userFound = await User.findById(req.user.id);
    const user =  userFound.username

    Post.findOneAndUpdate({ _id: postId }, { $pull: {likes: user} })
    .then((postActualizado) => {
        console.log('Like añadido:', postActualizado);
    })
    .catch((error) => {
        console.error('Error al añadir like:', error);
    });

    return res.json({message: "OK"})
}