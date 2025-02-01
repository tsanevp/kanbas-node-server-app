import mongoose from "mongoose";
import schema from "./schema.js";
const model = mongoose.model("QuizResultModel", schema);
export default model;