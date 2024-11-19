import Database from "../Database/index.js";

export function enrollUserInCourse(userId, courseId) {
    const { enrollments } = Database;
    enrollments.push({ _id: Date.now(), user: userId, course: courseId });
}

export function unEnrollUserInCourse(userId, courseId) {
    const { enrollments } = Database;
    Database.enrollments = enrollments.filter((enrollment) => !(enrollment.user === userId && enrollment.course === courseId));
}

export function getAllEnrollmentsForCourse(courseId) {
    const { enrollments, users } = Database;
    const people = users
        .filter((usr) =>
            enrollments.some((enrollment) => enrollment.user === usr._id && enrollment.course === courseId)
        )
    return people;
}
