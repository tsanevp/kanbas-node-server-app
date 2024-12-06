import * as quizResultsDao from "./dao.js";

export default function QuizRoutes(app) {
    app.delete("/api/quizResults/:quizResultId", async (req, res) => {
        const { quizResultId } = req.params;
        const status = await quizResultsDao.deleteQuizResult(quizResultId);
        res.send(status);
    });

    app.put("/api/quizResults/:quizResultId", async (req, res) => {
        const { quizResultId } = req.params;
        const quizResultUpdates = req.body;
        const status = await quizResultsDao.updateQuizResult(quizResultId, quizResultUpdates);
        res.send(status);
    });
}