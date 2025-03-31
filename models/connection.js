import mongoose from "mongoose";

const url = "mongodb://127.0.0.1:27017/map-app";

mongoose.connect(url);

console.log("✅ MongoDB Connected");
