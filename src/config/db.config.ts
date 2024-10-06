import dotenv from "dotenv";
import mongoose from "mongoose";

// This is required to load all the env's in the project
dotenv.config();

const MONGO_URL: string = process.env.MONGODB_URL || "";

const options = {
  autoIndex: false, // Don't build indexes
  maxPoolSize: 10, // Maintain up to 10 socket connections
  serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
  socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
};

export const db = mongoose
  .connect(MONGO_URL, options)
  .then((res) => {
    if (res) {
      console.log("Database connection successfull");
    }
  })
  .catch((err) => console.log(err));
