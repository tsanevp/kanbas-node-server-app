import mongoose from "mongoose";

// Sub-schema for user answers
const userAnswerSchema = new mongoose.Schema(
  {
    questionIndex: { type: Number, required: true },
    answer: { type: mongoose.Mixed},
    visited: { type: Boolean, default: false },
    answered: { type: Boolean, default: false },
    correct: { type: Boolean, default: false },
  },
  { _id: false }
);

// Schema for quiz results
const quizResultSchema = new mongoose.Schema(
  {
    courseId: { type: mongoose.Schema.Types.ObjectId, ref: "CourseModel"},
    quizId: { type: mongoose.Schema.Types.ObjectId, ref: "QuizModel"},
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "UserModel"},
    answers: { type: [userAnswerSchema], default: [] },
    finalScore: { type: Number, default: 0 },
    submissionDate: { type: String, default: Date.now.toString() },
    timeTaken: {type: String, default: ""}
  },
  { collection: "quizResults" }
);

export default quizResultSchema;