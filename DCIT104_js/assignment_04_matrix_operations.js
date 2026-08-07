const readlineSync = require("readline-sync");

function inputMatrix(r, c, tag) {
    console.log("Enter " + tag + " (" + r + " x " + c + "):");
    const mat = [];
    for (let row = 0; row < r; row++) {
        const vals = readlineSync.question("  Row " + (row + 1) + ": ").trim().split(" ");
        const rowData = [];
        for (let col = 0; col < c; col++) {
            rowData.push(Number(vals[col]));
        }
        mat.push(rowData);
    }
    return mat;
}

function printMatrix(mat) {
    for (let row = 0; row < mat.length; row++) {
        let line = "  ";
        for (let col = 0; col < mat[row].length; col++) {
            line = line + String(mat[row][col]).padStart(7);
        }
        console.log(line);
    }
}

function doTranspose(mat) {
    const r = mat.length;
    const c = mat[0].length;
    const out = [];
    for (let col = 0; col < c; col++) {
        const newRow = [];
        for (let row = 0; row < r; row++) {
            newRow.push(mat[row][col]);
        }
        out.push(newRow);
    }
    return out;
}

function doAddition(x, y) {
    const out = [];
    for (let row = 0; row < x.length; row++) {
        const newRow = [];
        for (let col = 0; col < x[0].length; col++) {
            newRow.push(x[row][col] + y[row][col]);
        }
        out.push(newRow);
    }
    return out;
}

function doMultiply(x, y) {
    const m = x.length;
    const n = x[0].length;
    const p = y[0].length;
    const out = [];

    for (let row = 0; row < m; row++) {
        const newRow = [];
        for (let col = 0; col < p; col++) {
            let total = 0;
            for (let k = 0; k < n; k++) {
                total = total + x[row][k] * y[k][col];
            }
            newRow.push(total);
        }
        out.push(newRow);
    }
    return out;
}

function main() {
    console.log("---------- PART A: Transpose ----------");
    const r = readlineSync.questionInt("Rows   : ");
    const c = readlineSync.questionInt("Columns: ");
    const mat = inputMatrix(r, c, "matrix");
    console.log("\nOriginal:");
    printMatrix(mat);
    console.log("\nTranspose:");
    printMatrix(doTranspose(mat));

    console.log("\n---------- PART B: Addition ----------");
    const br = readlineSync.questionInt("Rows   : ");
    const bc = readlineSync.questionInt("Columns: ");
    const m1 = inputMatrix(br, bc, "Matrix 1");
    const m2 = inputMatrix(br, bc, "Matrix 2");
    console.log("\nMatrix 1:");
    printMatrix(m1);
    console.log("\nMatrix 2:");
    printMatrix(m2);
    console.log("\nResult (M1 + M2):");
    printMatrix(doAddition(m1, m2));

    console.log("\n---------- PART C: Multiplication ----------");
    const m = readlineSync.questionInt("Rows in A          : ");
    const n = readlineSync.questionInt("Columns in A / Rows in B: ");
    const p = readlineSync.questionInt("Columns in B       : ");
    const a = inputMatrix(m, n, "Matrix A");
    const b = inputMatrix(n, p, "Matrix B");
    console.log("\nMatrix A:");
    printMatrix(a);
    console.log("\nMatrix B:");
    printMatrix(b);
    console.log("\nProduct (A x B):");
    printMatrix(doMultiply(a, b));
}

main();
