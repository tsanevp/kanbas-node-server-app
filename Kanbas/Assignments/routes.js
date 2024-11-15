import * as assignmentDao from "./dao.js";

export default function AssignmentRoutes(app) {
    app.delete("/api/assignments/:assignmentId", (req, res) => {
        const { assignmentId } = req.params;
        assignmentDao.deleteAssignment(assignmentId);
        res.sendStatus(204);
    });

    app.put("/api/assignments/:assignmentId", (req, res) => {
        const { assignmentId } = req.params;
        const assignmentUpdates = req.body;
        assignmentDao.updateAssignment(assignmentId, assignmentUpdates);
        res.sendStatus(204);
    });


    app.get("/api/assignments", (req, res) => {
        const courses = dao.findAllCourses();
        res.send(courses);
    });


    app.get("/api/assignments/:courseId/modules", (req, res) => {
        const { courseId } = req.params;
        const modules = modulesDao.findModulesForCourse(courseId);
        res.json(modules);
    });

    app.post("/api/courses/:courseId/modules", (req, res) => {
        const { courseId } = req.params;
        const module = {
            ...req.body,
            course: courseId,
        };
        const newModule = modulesDao.createModule(module);
        res.send(newModule);
    });
}
