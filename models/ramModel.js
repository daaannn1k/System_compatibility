import pkg from "mongoose";
const { Schema, model } = pkg;

const ramSchema = new Schema({
  model: { type: String, required: true },
  price: { type: String, required: true },
  description: { type: String, required: true },
});

export default model("RAM", ramSchema);
