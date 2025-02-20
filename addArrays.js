// 22. Write a program to add the values of two 2D arrays
// Program should contains 3 functions including the main function


function getArray(size, n) {

    let arr = [];
    alert(`Enter the elements of array ${n}:`)
    for (let i = 0; i < size; i++) {
        let input = prompt();
        
        // Convert input into an array of numbers
        let row = input.split(" ").map(item => item.trim()).map(Number);
        
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

function addArray(arr1, arr2, n) {
    let sum = [];

    for (let i = 0; i < n; i++) {
        let row = [];
        for (let j = 0; j < n; j++) {
            row.push(arr1[i][j] + arr2[i][j]);
        } sum.push(row);
    }
    return sum;
}

function displayArray(Array) {//console log the array matrix
    console.log(`Sum of array 1 and array 2:`);
    Array.forEach(row => console.log(row.join(" ")));
}

let size = parseInt(prompt("Enter the Array size: \n"));

if (!isNaN(size) && size > 0) {
    let arr1 = getArray(size, 1);
    let arr2 = getArray(size, 2);

    let sumArr = addArray(arr1, arr2, size);

    displayArray(sumArr);
}