import mongoose from "mongoose";

const followerSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    followers: [
      {
        type: mongoose.Schema.Types.ObjectId,
        default: null,
      },
    ],
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Follower", followerSchema);
