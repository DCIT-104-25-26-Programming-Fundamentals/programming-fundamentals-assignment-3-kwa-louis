const readlineSync = require("readline-sync");

function getSum(data) {
    let acc = 0;
    let idx = 0;
    while (idx < data.length) {
        acc = acc + data[idx];
        idx = idx + 1;
    }
    return acc;
}

function getMean(data) {
    let acc = 0;
    let idx = 0;
    while (idx < data.length) {
        acc = acc + data[idx];
        idx = idx + 1;
    }
    return acc / data.length;
}

function getMax(data) {
    let peak = data[0];
    for (let idx = 1; idx < data.length; idx++) {
        if (data[idx] > peak) {
            peak = data[idx];
        }
    }
    return peak;
}

function getMin(data) {
    let low = data[0];
    for (let idx = 1; idx < data.length; idx++) {
        if (data[idx] < low) {
            low = data[idx];
        }
    }
    return low;
}

function main() {
    const size = readlineSync.questionInt("How many numbers? ");

    if (size <= 0) {
        console.log("Error: Please enter a positive integer greater than 0.");
        return;
    }

    const data = [];
    for (let idx = 0; idx < size; idx++) {
        const val = readlineSync.questionFloat("Enter number " + (idx + 1) + ": ");
        data.push(val);
    }

    console.log("\nResults:");
    console.log("Sum:     " + getSum(data));
    console.log("Average: " + getMean(data));
    console.log("Maximum: " + getMax(data));
    console.log("Minimum: " + getMin(data));
}

main();
