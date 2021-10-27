import pkg from "mongoose";
const { Schema, model } = pkg;

const motherboardSchema = new Schema({
  model: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
});

export default model("Motherboard", motherboardSchema);
