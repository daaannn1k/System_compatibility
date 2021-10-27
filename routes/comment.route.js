import { Router } from "express";
import Comment from "../models/commentModel.js";

const commentRoute = Router();

commentRoute.post("/comments", async function (req, res) {
  try {
    const { comment, user } = req.body;
    const newComment = new Comment({ comment: comment, user: user });
    await newComment.save();
    res.status(201).json({ message: "Message has been successfully added" });
  } catch (e) {
    res
      .status(500)
      .json({ message: "Something went wrong, please try again!" });
  }
});

export default commentRoute;
