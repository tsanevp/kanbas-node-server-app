import mongoose from "mongoose";

// Sub-schema for question options
const optionSchema = new mongoose.Schema(
  {
    text: { type: String, required: true },
    isCorrect: { type: Boolean, default: false },
  },
  { _id: false }
);

// Sub-schema for questions
const questionSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    questionText: { type: String, required: true },
    questionType: {
      type: String,
      enum: ["MultipleChoice", "FillInTheBlank", "TrueFalse"],
      required: true,
    },
    points: { type: Number, default: 1 },
    options: { type: [optionSchema], default: [] },
    correctAnswers: { type: [String], default: [] }, 
    isTrue: { type: Boolean, default: false },
    isEditing: { type: Boolean, default: false },
    editingIndex: { type: Number, default: -1 },
  },
  { _id: false }
);

// Sub-schemas for time limit and attempts
const timeLimitSchema = new mongoose.Schema(
  {
    selected: { type: Boolean, default: true },
    value: { type: Number, default: 20 },
  },
  { _id: false }
);

const attemptsSchema = new mongoose.Schema(
  {
    selected: { type: Boolean, default: false },
    value: { type: Number, default: 1 },
  },
  { _id: false }
);

// Main quiz schema
const quizSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    assignTo: { type: String, default: "Everyone" },
    quizType: {
      type: String,
      enum: ["GradedQuiz", "PracticeQuiz", "Graded Survey", "Ungraded Survey"],
      default: "GradedQuiz",
    },
    assignmentGroup: {
      type: String,
      enum: ["Quizzes", "Exams", "Assignments", "Project"],
      default: "Quizzes",
    },
    shuffleAnswers: { type: Boolean, default: true },
    timeLimit: {
      type: timeLimitSchema,
      default: () => ({ selected: true, value: 20 }),
    },
    multipleAttempts: {
      type: attemptsSchema,
      default: () => ({ selected: false, value: 1 }),
    },
    showCorrectAnswers: { type: Boolean, default: true },
    accessCode: { type: String, default: "" },
    oneQuestionAtATime: { type: Boolean, default: true },
    webcamRequired: { type: Boolean, default: false },
    lockQuestionsAfterAnswering: { type: Boolean, default: false },
    dueDate: { type: String },
    availableFrom: { type: String },
    availableUntil: { type: String },
    published: { type: Boolean, default: false },
    course: { type: mongoose.Schema.Types.ObjectId, ref: "CourseModel" },
    questions: { type: [questionSchema], default: [] }, // Add the questions array
  },
  { collection: "quizzes" }
);

export default quizSchema;
