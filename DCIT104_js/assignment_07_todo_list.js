const readlineSync = require("readline-sync");

const todoList = [];

function insertTask() {
    const item = readlineSync.question("Enter task: ").trim();

    if (item === "") {
        console.log("Task cannot be empty. Nothing was added.");
        return;
    }

    todoList.push(item);
    console.log("Task added: \"" + item + "\"");
}

function listTasks() {
    if (todoList.length === 0) {
        console.log("Your to-do list is empty. Add a task to get started!");
        return;
    }

    console.log("Your Tasks:");
    for (let i = 0; i < todoList.length; i++) {
        console.log("  " + (i + 1) + ". " + todoList[i]);
    }
}

function removeTask() {
    if (todoList.length === 0) {
        console.log("There are no tasks to delete.");
        return;
    }

    listTasks();

    const pick = readlineSync.questionInt("Enter task number to delete: ");

    if (pick < 1 || pick > todoList.length) {
        console.log("Error: Task number must be between 1 and " + todoList.length + ".");
        return;
    }

    const deleted = todoList[pick - 1];
    todoList.splice(pick - 1, 1);
    console.log("Task \"" + deleted + "\" has been removed.");
}

function displayMenu() {
    console.log();
    console.log("****************************");
    console.log("       TO-DO LIST MENU");
    console.log("****************************");
    console.log("1. Add task");
    console.log("2. View tasks");
    console.log("3. Delete task");
    console.log("4. Quit");
}

function main() {
    let running = true;

    while (running) {
        displayMenu();
        const option = readlineSync.questionInt("Enter your choice (1-4): ");

        if (option === 1) {
            insertTask();
        } else if (option === 2) {
            listTasks();
        } else if (option === 3) {
            removeTask();
        } else if (option === 4) {
            console.log("Goodbye!");
            running = false;
        } else {
            console.log("Invalid choice. Please enter a number between 1 and 4.");
        }
    }
}

main();
