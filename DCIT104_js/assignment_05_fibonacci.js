const readlineSync = require("readline-sync");

function showSequence(terms) {
    if (terms <= 0) {
        console.log("Error: Please enter a positive integer greater than 0.");
        return;
    }

    let prev = 0;
    let curr = 1;
    let output = "";

    for (let count = 0; count < terms; count++) {
        if (count === 0) {
            output = output + 0;
        } else if (count === 1) {
            output = output + " " + 1;
        } else {
            let next = prev + curr;
            prev = curr;
            curr = next;
            output = output + " " + curr;
        }
    }

    console.log("Fibonacci sequence: " + output);
}

function belongsToSequence(target) {
    if (target < 0) {
        return false;
    }

    if (target === 0 || target === 1) {
        return true;
    }

    let prev = 0;
    let curr = 1;

    while (curr < target) {
        let next = prev + curr;
        prev = curr;
        curr = next;
    }

    return curr === target;
}

function main() {
    const terms = readlineSync.questionInt("How many terms? ");
    showSequence(terms);

    console.log();

    const target = readlineSync.questionInt("Enter a number to check: ");

    if (belongsToSequence(target)) {
        console.log(target + " is a Fibonacci number.");
    } else {
        console.log(target + " is NOT a Fibonacci number.");
    }
}

main();
