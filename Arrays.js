let cars = ["VW", "Suzuki", "Mahindra", "Tata"];

//display the array elements
console.log(cars);
console.log(cars[0]);
console.log(cars[1]);
console.log(cars[2]);
console.log(cars[3]);
console.log("Fourth array element is", cars[4]);

//add a new element to the end
cars.push("BYD");
console.log("Fourth array element is", cars[4]);
console.log(cars);

//remove the added element from the end
cars.pop();
console.log(cars);

//add an element to the start
cars.unshift("Skoda");
console.log(cars);

// remove an element from the start
cars.shift();
console.log(cars);

//find an index
let index = cars.indexOf("Mahindra");
console.log(index);

//display all elements
for (let i = 0; i <= cars.length - 1; i++) { // can also use 'for(let car in cars)'
    console.log(cars[i]);
}

//copy array to a new array
let newCars = [];
for (let i = 0; i <= cars.length - 1; i++) {
    newCars.push(cars[i]);
}
console.log("New Array :", newCars);

//print array in reverse

for (let i = newCars.length - 1; i >= 0; i--) {
    console.log(newCars[i]);
}

//sort an array
cars.sort();
console.log(cars);
//reverse sort
cars.sort().reverse();
console.log(cars);

//take array as user input seperated using spaces
let input1 = prompt("Enter the array elements seperated by spaces: ");
let arr1 = Array.from(input1.split(" "), Number);
console.log(arr1);

//take array as input seperated by commas

let input2 = prompt("Enter the array elements seperated by commas: ");
let arr2 = input2.split(",").map(item => item.trim());
console.log(arr2);



// 10. Program should accept an array from the user, swap the values of two arrays and display it on the console

function getArraySize() {
    let size = prompt("Enter the size of array: ");
    //check for click of cancel button
    if (size === null) {
        console.log("User cancelled the session!")
        return null;
    }
    //check for valid array size
    if (size === "" || isNaN(size) || size <= 0) {
        console.log("Enter a valid size!!");
        return getArraySize();
    }
    return parseInt(size);
}


function getArrayItems(size) {
    //get array elements
    let input = prompt(`Enter ${size} array elements separated by commas: `);
    if (input === null) {
        console.log("User cancelled the input!");
        return [];
    }
    let arr = input.split(",").map(item => item.trim());

    // Validate size
    if (arr.length !== size) {
        console.log(`You must enter exactly ${size} elements!`);
        return getArrayItems(size);
    }

    console.log(arr);
    return arr;
}


function swapArrays(a, b) {
    // Swap the elements of arrays instead of reassigning references
    for (let i = 0; i < a.length; i++) {
        [a[i], b[i]] = [b[i], a[i]];
    }
}


let size = getArraySize();
if (size !== null) {
    let arr1 = getArrayItems(size);
    let arr2 = getArrayItems(size);

    //display arrays before swap
    console.log("Array 1 before swap: ", arr1.join(","));
    console.log("Array 2 before swap: ", arr2.join(","));

    swapArrays(arr1, arr2);

    //display arrays after swapp
    console.log("Array 1 after swap: ", a.join(","));
    console.log("Array 2 after swap: ", b.join(","));
}



// 11. Program should accept an array and display the number of even numbers contained in that array

function countEvenNum() {
    let input = prompt(`Enter the array elements (comma-separated): `);

    //handle cancel event
    if (input === null) {
        console.log("Session terminated by user!!");
        return null;
    }

    //handle blank input
    if (input.trim() === "") {
        console.log("Empty Array entered!");
        return countEvenNum();
    }

    // Convert input to an array of numbers
    let arr = input.split(",")
        .map(item => item.trim()) // Trim spaces
        .filter(item => item != "") // Remove empty strings
        .map(Number) // Convert to numbers
        .filter(item => !isNaN(item)); // Remove non numeric values

    // Handle cases where no valid numbers are entered
    if (arr.length === 0) {
        console.log("No valid numbers entered! Please try again.");
        return countEvenNum();
    }

    console.log("Entered array is: ", arr.join(","));

    let evenNumbers = arr.filter(item => item % 2 === 0);
    let count = evenNumbers.length;

    console.log(`Total number of even numbers is ${count}`);
    console.log("The even elements are: ", evenNumbers.join(","));
}

countEvenNum();



// 12. Program should accept and array, sort the array values in descending order and display it

function sortDescend() {
    let input = prompt("Enter the array elements(comma-seperated): ");

    //handle blank input
    if (input === "") {
        console.log("Input can't be blank!!");
        return sortDescend();
    }

    //handle cancel event
    if (input === null) {
        console.log("User pressed cancel button.");
        return null;
    }

    let arr = input.split(",")// drop commas
        .map(item => item.trim()) // remove spaces
        .filter(item => !isNaN(item)) // remove non integers
        .filter(item => item != "") // remove empty elements
        .map(Number) // convert into numbers


    //check if the array has any numbers after filtering
    if (arr.length === 0) {
        console.log("Please enter an array with valid numbers!!");
        return sortDescend();
    }

    console.log("The Entered array is: ", arr.join(","));

    // sort the array in descending order
    arr.sort((a, b) => b - a);

    console.log("Sorted array is: ", arr.join(","));
}

sortDescend();



// 13. Write a program to identify whether a string is a palindrome or not


function isPalindrome() {

    let str = prompt("Enter the string to check for a palindrome: ");

    if (str === null) {
        console.log("Cancelled by user!!");
        return null;
    }

    if (str === "") {
        console.log("Input empty!!");
        return isPalindrome();
    }

    //remove spaces and normalize the string to lowercase
    normStr = str.replace(/\s+/g, "").toLowerCase();

    //split the string to array of characters
    let revArr = normStr.split("");

    //reverse it & form a string again
    let revStr = revArr.reverse().join("");

    //compare both strings
    if (normStr == revStr) {
        console.log("Palindrome!!");
    }
    else {
        console.log("Not a Palindrome!!");
    }
}

isPalindrome();

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

// 15. Write a program to accept an array and display it on the console using functions

function main() {//main function
    let arr = getArray();
    if (arr !== null) {//dont display empty array
        displayArray(arr);
    }
}


function getArray() {//function to get array as input
    let input = prompt("Enter an array of numbers: ");

    if (input === null) {//handle cancel event
        console.log("Session cancelled by user!");
        return null;
    }

    if (input === "") {//handle empty input
        console.log("Invalid entry!!");
        return getArray();
    }

    let newArray = input.split(",")//seperate the items with commas
                        .map(item => item.trim())//trim spaces
                        .filter(item => (item != ""));//remove empty elements
    return newArray;
}


function displayArray(array) {//function to console log the array
    console.log("Enetered Array is: ");
    console.log(array.join(","));
}


//call main function
main();



// 21. Write a program to multiply the adjacent values of an array and store it in an another array
let size = parseInt(prompt("Enter the array limit\n"));

if (!isNaN(size) && size > 0) {
    let arr = prompt("Enter the values of array\n").split(" ").map(Number); // Convert input string to an array of numbers

    if (arr.length !== size || arr.some(num => isNaN(num))) {
        console.log("Invalid input! Please enter exactly", size, "numbers.");
    } else {
        let newArr = []; // Initialize an empty array

        for (let i = 0; i < arr.length - 1; i++) {
            newArr[i] = arr[i] + arr[i + 1]; // Sum adjacent elements
        }

        console.log("Output\n", newArr.join(" "));
    }
} else {
    console.log("Invalid limit entered!");
}



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



// 23. Write an object oriented program to store and display the values of a 2D array
// Program should contains 3 functions including the main function


function getArray(size) {
    let arr = [];
    alert(`Enter the array elements`);
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

function displayArray(Array) {//console log the array matrix
    console.log(`Array values are:`);
    Array.forEach(row => console.log(row.join(" ")));
}

let size = parseInt(prompt("Enter the Array size: \n"));

if (!isNaN(size) && size > 0) {
    let myArr = getArray(size);
    displayArray(myArr);
}