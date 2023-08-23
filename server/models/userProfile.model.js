import mongoose from "mongoose";

const userProfileSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    avatar: {
      type: String,
      default: "default",
    },
    bio: {
      type: String,
      default: null,
    },
    followers: [
      {
        type: mongoose.Schema.Types.ObjectId,
        default: null,
      },
    ],
    following: [
      {
        type: mongoose.Schema.Types.ObjectId,
        default: null,
      },
    ],
  },
  {
    timestamps: { createdAt: false },
  }
);

export default mongoose.model("User-profile", userProfileSchema);
