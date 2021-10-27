import express from "express";
import config from "config";
import mongoose from "mongoose";
import commentRoute from "./routes/comment.route.js";
import compatibilityRoute from "./routes/compatibility.route.js";

const app = express();
const PORT = config.get("port") || 5000;
const MONGOOSEURL =
  config.get("mongoUri") || "mongodb://localhost:27017/todolistDB";
app.use(express.json({ extended: true }));
app.use("/myapp", commentRoute);
app.use("/myapp", compatibilityRoute);

//
async function start() {
  try {
    await mongoose.connect(MONGOOSEURL, { useNewUrlParser: true });
    app.listen(PORT, () => {
      console.log(`Server successfully opened on ${PORT}`);
    });
  } catch (e) {
    console.log("Server error", e.message);
    process.exit(1);
  }
}

start();
