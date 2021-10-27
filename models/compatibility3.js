import pkg from "mongoose";
const { Schema, model } = pkg;

const compatibilitySchema = new Schema({
  name: { type: String, required: true },
});

export default model("Compatibility3", compatibilitySchema);
