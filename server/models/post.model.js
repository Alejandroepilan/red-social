import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    text: {
        type: String,
        required: true,
    },
    likes: {
        type: Array,
        default: null,
    }
}, {
    timestamps: true
})

export default mongoose.model('Post', postSchema)