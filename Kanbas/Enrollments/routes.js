import * as enrollmentsDao from "./dao.js";

export default function EnrollmentsRoutes(app) {
    app.post("/api/enrollment/:courseId", (req, res) => {
        const currentUser = req.session["currentUser"];
        const { courseId } = req.params;
        enrollmentsDao.enrollUserInCourse(currentUser._id, courseId);
        res.sendStatus(204);
    });
    
    app.delete("/api/enrollment/:courseId", (req, res) => {
        const currentUser = req.session["currentUser"];
        const { courseId } = req.params;
        enrollmentsDao.unEnrollUserInCourse(currentUser._id, courseId);
        res.sendStatus(204);
    });

    app.get("/api/enrollment/:courseId", (req, res) => {
        const { courseId } = req.params;
        const enrollments = enrollmentsDao.getAllEnrollmentsForCourse(courseId);
        res.json(enrollments);
    });
}
