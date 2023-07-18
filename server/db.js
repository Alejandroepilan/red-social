import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://alejandroepilan:7o2inHkfJaVflAb8@pruebas.6cglwzx.mongodb.net/red-social');
        console.log("DB conectada.")
    } catch (error) {
        console.log(error);
    }
};