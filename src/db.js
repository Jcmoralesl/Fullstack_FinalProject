import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config()

export const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://juancamilomorales43:wio82jPQvGjcfcSh@cluster0.abtu2od.mongodb.net/");
        console.log("DB is connected");
    } catch (error) {
        console.log(error);
    }
};
