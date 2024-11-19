import * as quizzesDao from "./dao.js";

export default function QuizRoutes(app) {
    app.delete("/api/quizzes/:quizId", (req, res) => {
        const { quizId } = req.params;
        quizzesDao.deleteQuiz(quizId);
        res.sendStatus(204);
    });

    app.put("/api/quizzes/:quizId", (req, res) => {
        const { quizId } = req.params;
        const quizUpdates = req.body;
        quizzesDao.updateQuiz(quizId, quizUpdates);
        res.sendStatus(204);
    });

    app.get("/api/quizzes/:courseId", (req, res) => {
        const { courseId } = req.params;
        const quizzes = quizzesDao.findQuizzesForCourse(courseId);
        res.json(quizzes);
    });
}
