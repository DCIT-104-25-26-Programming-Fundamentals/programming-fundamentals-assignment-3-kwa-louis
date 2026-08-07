const readlineSync = require("readline-sync");

const registry = [];

function computeMean(marks) {
    let sum = 0;
    for (let i = 0; i < marks.length; i++) {
        sum = sum + marks[i];
    }
    const mean = sum / marks.length;
    return Math.round(mean * 100) / 100;
}

function locateRecord(sid) {
    for (let i = 0; i < registry.length; i++) {
        if (registry[i].studentID === sid) {
            return registry[i];
        }
    }
    return null;
}

function registerStudent() {
    const fullName = readlineSync.question("Student name: ").trim();

    if (fullName === "") {
        console.log("Error: Name cannot be empty.");
        return;
    }

    const sid = readlineSync.questionInt("Student ID: ");

    if (locateRecord(sid) !== null) {
        console.log("Error: A student with ID " + sid + " already exists.");
        return;
    }

    const numMarks = readlineSync.questionInt("How many scores? ");

    if (numMarks <= 0) {
        console.log("Error: Number of scores must be greater than 0.");
        return;
    }

    const marks = [];
    for (let i = 0; i < numMarks; i++) {
        const mark = readlineSync.questionFloat("Enter score " + (i + 1) + ": ");
        marks.push(mark);
    }

    const record = {
        fullName: fullName,
        studentID: sid,
        marks: marks
    };

    registry.push(record);
    console.log("Student \"" + fullName + "\" added successfully.");
}

function showAllRecords() {
    if (registry.length === 0) {
        console.log("No student records found. Add a student to get started.");
        return;
    }

    const line = "=".repeat(65);
    console.log(line);
    console.log("Name                ID          Scores                   Average");
    console.log(line);

    for (let i = 0; i < registry.length; i++) {
        const rec = registry[i];
        const markStr = rec.marks.join(", ");
        const avg = computeMean(rec.marks).toFixed(2);

        console.log(
            rec.fullName.padEnd(20) +
            String(rec.studentID).padEnd(12) +
            markStr.padEnd(25) +
            avg
        );
    }

    console.log(line);
}

function lookupAverage() {
    const sid = readlineSync.questionInt("Enter student ID: ");
    const rec = locateRecord(sid);

    if (rec === null) {
        console.log("Error: No student found with ID " + sid + ".");
        return;
    }

    const avg = computeMean(rec.marks).toFixed(2);
    console.log(rec.fullName + "'s average score: " + avg);
}

function displayMenu() {
    console.log();
    console.log("********************************");
    console.log("   STUDENT RECORD SYSTEM MENU");
    console.log("********************************");
    console.log("1. Add student");
    console.log("2. Display all students");
    console.log("3. Calculate average score");
    console.log("4. Quit");
}

function main() {
    let running = true;

    while (running) {
        displayMenu();
        const option = readlineSync.questionInt("Enter your choice (1-4): ");

        if (option === 1) {
            registerStudent();
        } else if (option === 2) {
            showAllRecords();
        } else if (option === 3) {
            lookupAverage();
        } else if (option === 4) {
            console.log("Goodbye!");
            running = false;
        } else {
            console.log("Invalid choice. Please enter a number between 1 and 4.");
        }
    }
}

main();
