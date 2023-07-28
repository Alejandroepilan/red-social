import User from '../models/user.model.js';
import Message from '../models/message.model.js';

export const createPost = async (req, res) => {
    const { text } = req.body;
    const userFound = await User.findById(req.user.id);
    const user =  userFound.username

    try {
        const newPost = new Message({
            user,
            text,
        });
    
        await newPost.save();

        return res.json({text})
    } catch (error) {
        return res.json({error})        
    }

}

export const getMessages = async (req, res) => {
    const messages = await Message.find()

    return res.json({messages}) 

}