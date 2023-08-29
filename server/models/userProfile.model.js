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
      default: "",
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
    badges: [
      {
        type: String,
        default: null,
      },
    ],
    permissions: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: { createdAt: false },
  }
);

export default mongoose.model("User-profile", userProfileSchema);
