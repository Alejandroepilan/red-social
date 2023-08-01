import User from '../models/user.model.js';
import Post from '../models/post.model.js';

export const createPost = async (req, res) => {
    const { text } = req.body;
    const userFound = await User.findById(req.user.id);
    const user =  userFound.username

    try {
        const newPost = new Post({
            user,
            text,
        });
    
        await newPost.save();

        return res.json({text})
    } catch (error) {
        return res.json({error})        
    }

}

export const getPosts = async (req, res) => {
    const posts = await Post.find()

    return res.json({posts})
}