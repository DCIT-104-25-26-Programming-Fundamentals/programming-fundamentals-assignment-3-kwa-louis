const readlineSync = require("readline-sync");

function computeGrade(marks) {
    if (marks < 0 || marks > 100) {
        return null;
    }

    let grade = "";

    if (marks >= 80) {
        grade = "A";
    } else if (marks >= 70) {
        grade = "B";
    } else if (marks >= 60) {
        grade = "C";
    } else if (marks >= 50) {
        grade = "D";
    } else {
        grade = "F";
    }

    return grade;
}

function main() {
    const marks = readlineSync.questionInt("Enter student score (0-100): ");
    const grade = computeGrade(marks);

    if (grade === null) {
        console.log("Error: Score must be between 0 and 100.");
    } else {
        console.log("Grade: " + grade);
    }
}

main();
