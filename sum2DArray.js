// 14. Write a program to accept two 2D arrays and display its sum

function getArray(size, n) {//get array as input
    let arr = [];
    alert(`****Enter the ${size * size} elements of array ${n}****`);

    for (let i = 0; i < size; i++) {
        let input = prompt(`Enter row ${i + 1} elements of array ${n} (comma-separated):  `);
        
        // Convert input into an array of numbers
        let row = input.split(",").map(item => item.trim()).map(Number);
        
        // Validate input
        if (row.length !== size || row.some(isNaN)) {
            console.log(`****Error: You must enter exactly ${size} valid numbers! Try again.****`);
            i--; // Repeat the row input
        } else {
            arr.push(row);
        }
    }
    return arr;
}

function getSum(arr1, arr2, n) {//calculate sum of two arrays
    let sum = [];

    for (let i = 0; i < n; i++) {
        let row = [];
        for (let j = 0; j < n; j++) {
            row.push(arr1[i][j] + arr2[i][j]);
        } sum.push(row);
    }
    return sum;
}

function displayArray(Array, n) {//console log the array matrix
    console.log(`Array ${n}:`);
    Array.forEach(row => console.log(row.join(" ")));
}


//get array size from user
let size = prompt("Enter the size of Array: ");
size = Number(size);

if (isNaN(size) || size <= 0) {
    console.log("****Invalid entry!! Please enter a positive number****");
}
else {
    let arr1 = getArray(size, 1);
    let arr2 = getArray(size, 2);
    let sumArr = getSum(arr1, arr2, size);

    displayArray(arr1, 1);
    displayArray(arr2, 2);
    displayArray(sumArr, "Sum");
}