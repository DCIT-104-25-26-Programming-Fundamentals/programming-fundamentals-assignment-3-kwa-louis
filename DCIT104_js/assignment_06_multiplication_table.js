const readlineSync = require("readline-sync");

function singleTable(val) {
    console.log("\n--- Multiplication Table for " + val + " ---");
    for (let step = 1; step <= 12; step++) {
        console.log("  " + val + "  x  " + step + "  =  " + (val * step));
    }
}

function allTables(limit) {
    if (limit <= 0) {
        console.log("Error: Please enter a positive integer greater than 0.");
        return;
    }

    for (let val = 1; val <= limit; val++) {
        singleTable(val);
        if (val < limit) {
            console.log("***************************");
        }
    }
}

function main() {
    const val = readlineSync.questionInt("Enter a number for its multiplication table: ");

    if (val <= 0) {
        console.log("Error: Please enter a positive integer greater than 0.");
        return;
    }

    singleTable(val);

    console.log();
    console.log("===================================");
    console.log();

    const limit = readlineSync.questionInt("Enter N to print all tables from 1 to N: ");
    console.log();
    allTables(limit);
}

main();
