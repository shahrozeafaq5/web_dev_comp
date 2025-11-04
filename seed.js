import mongoose from "mongoose";
import dotenv from "dotenv";
import Market from "./models/Market.js";
import { marketData } from "./marketData.js";

dotenv.config();

mongoose.connect(process.env.MONGO_URI || "mongodb://localhost:27017/marketdb")
  .then(async () => {
    await Market.deleteMany();
    await Market.insertMany(marketData);
    console.log("Market data seeded successfully");
    process.exit();
  })
  .catch(err => console.error(err));
