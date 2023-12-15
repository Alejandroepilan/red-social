import mongoose from "mongoose";
import {} from "dotenv/config";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URI);
    console.log("DB conectada.");
  } catch (error) {
    console.log(error);
  }
};
