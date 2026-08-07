const readlineSync = require("readline-sync");

function checkPrime(num) {
    if (num <= 1) {
        return false;
    }

    if (num === 2) {
        return true;
    }

    if (num % 2 === 0) {
        return false;
    }

    let divisor = 3;
    while (divisor * divisor <= num) {
        if (num % divisor === 0) {
            return false;
        }
        divisor = divisor + 2;
    }

    return true;
}

function main() {
    const num = readlineSync.questionInt("Enter a number: ");

    const result = checkPrime(num);

    if (result === true) {
        console.log(num + " is a prime number.");
    } else {
        console.log(num + " is NOT a prime number.");
    }
}

main();
