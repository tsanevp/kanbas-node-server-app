import mongoose from "mongoose";

const onlineEntryOptionsSchema = new mongoose.Schema(
  {
    textEntry: { type: Boolean, default: false },
    websiteUrl: { type: Boolean, default: false },
    mediaRecordings: { type: Boolean, default: false },
    studentAnnotation: { type: Boolean, default: false },
    fileUpload: { type: Boolean, default: false },
  },
  { _id: false }
);

const assignmentSchema = new mongoose.Schema(
 {
   title: String,
   course: { type: mongoose.Schema.Types.ObjectId, ref: "CourseModel" },
   description: String,
   points: Number,
   assignmentGroup: String,
   displayGradeAd: String,
   submissionType: String,
   onlineEntryOptions: { type: onlineEntryOptionsSchema, default: {} },
   assignTo: String,
   dueDate: String,
   availableFrom: String,
   availableUntil: String,
 },
 { collection: "assignments" }
);

export default assignmentSchema;