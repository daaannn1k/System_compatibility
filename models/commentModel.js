import pkg from "mongoose";
const { Schema, model } = pkg;

const commentSchema = new Schema({
  comment: { type: String, required: true },
  user: { type: String, required: true },
});

export default model("Comment", commentSchema);
