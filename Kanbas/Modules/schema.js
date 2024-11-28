import mongoose from "mongoose";
const schema = new mongoose.Schema(
  {
    name: String,
    description: String,
    course: { type: mongoose.Schema.Types.ObjectId, ref: "CourseModel" },
    lessons: [
      {
        name: { type: String, required: true },
        description: { type: String, required: true },
      },
    ],
  },
  { collection: "modules" }
);
export default schema;