import model from "./model.js";

export function createQuizResult(quizResult) {
    delete quizResult._id;
    return model.create(quizResult);
}

export function findQuizResultsForUser(userId, courseId) {
    return model.find({ userId: userId, courseId: courseId })
        .populate("courseId")
        .populate("userId")
        .sort({ submissionDate: -1 }
        );
}

export function deleteQuizResult(quizResultId) {
    return model.deleteOne({ _id: quizResultId });
}

export function updateQuizResult(quizResultId, quizResultUpdates) {
    return model.updateOne({ _id: quizResultId }, { $set: quizResultUpdates });
}