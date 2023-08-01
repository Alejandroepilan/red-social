import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    user: {
        type: String,
        required: true,
    },
    text: {
        type: String,
        required: true,
    },
    likes: {
        type: Number,
        required: true,
        default: 0,
    },
    liked: {
        type: Boolean,
        required: true,
        default: false,
    }
}, {
    timestamps: true
})

export default mongoose.model('Post', postSchema)