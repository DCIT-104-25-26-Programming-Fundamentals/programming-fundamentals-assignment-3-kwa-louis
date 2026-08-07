const readlineSync = require("readline-sync");

function doAdd(x, y) {
    return x + y;
}

function doSub(x, y) {
    return x - y;
}

function doMul(x, y) {
    return x * y;
}

function doDiv(x, y) {
    if (y === 0) {
        return null;
    }
    return Math.round((x / y) * 100) / 100;
}

function doMod(x, y) {
    if (y === 0) {
        return null;
    }
    return x % y;
}

function doPow(x, y) {
    return Math.pow(x, y);
}

function displayMenu() {
    console.log();
    console.log("############################");
    console.log("      SIMPLE CALCULATOR");
    console.log("############################");
    console.log("1. Addition");
    console.log("2. Subtraction");
    console.log("3. Multiplication");
    console.log("4. Division");
    console.log("5. Modulus");
    console.log("6. Exponentiation");
    console.log("7. Quit");
}

function main() {
    let running = true;

    while (running) {
        displayMenu();
        const option = readlineSync.questionInt("Select an operation (1-7): ");

        if (option === 7) {
            console.log("Goodbye!");
            running = false;
            continue;
        }

        if (option < 1 || option > 7) {
            console.log("Invalid choice. Please enter a number between 1 and 7.");
            continue;
        }

        const x = readlineSync.questionFloat("Enter first number : ");
        const y = readlineSync.questionFloat("Enter second number: ");

        let output = null;
        let op = "";

        if (option === 1) {
            output = doAdd(x, y);
            op = "+";
        } else if (option === 2) {
            output = doSub(x, y);
            op = "-";
        } else if (option === 3) {
            output = doMul(x, y);
            op = "*";
        } else if (option === 4) {
            output = doDiv(x, y);
            op = "/";
        } else if (option === 5) {
            output = doMod(x, y);
            op = "%";
        } else if (option === 6) {
            output = doPow(x, y);
            op = "**";
        }

        if (output === null) {
            console.log("Error: Cannot divide by zero.");
        } else {
            console.log("Result: " + x + " " + op + " " + y + " = " + output);
        }
    }
}

main();
