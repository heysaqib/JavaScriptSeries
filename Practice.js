// 1. Accept a char input from the user and display it on the console.

function checkSingleChar() {
    let char = prompt("Enter a character: ");
    //check for input & only one character is entered
    if (char !== null && char.length === 1) {
        return char;
    }
    else {
        alert("Invalid Entry!! Please Enter a single character: ");
        return checkSingleChar();
    }
}
//display the input
let char = checkSingleChar();
console.log("Entered character is: ", char);



// 2. Accept two inputs from the user and output their sum.

function getInteger() {//input integer
    let num = prompt("Enter an integer: ");

    if (num === null) {
        console.log("User cancelled the input.");
        return null;  // Return null to indicate cancellation
    }
    num = num.trim();
    if (num === "" || isNaN(num) || !Number.isInteger(parseFloat(num))) {
        alert("Invalid Entry!!");
        return getInteger();
    }

    return parseInt(num);
}

function getDecimal() {// input decimal number
    let num = prompt("Enter a decimal number: ");


    if (num === null) {
        console.log("User cancelled the input.");
        return null;  // Return null to indicate cancellation
    }
    num = num.trim();
    if (num === "" || isNaN(num)) {
        alert("Invalid Entry!!");
        return getDecimal();
    }

    return parseFloat(num);

}

function theirSum(a, b) {// calculate sum
    return a + b;
}

let num1 = getInteger();
if (num1 !== null) {
    let num2 = getDecimal();
    if (num2 !== null) {
        let sum = theirSum(num1, num2);
        console.log(num1, "+", num2, "=", sum);
    } else {
        console.log("Operation cancelled while entering decimal number.");
    }
} else {
    console.log("Operation cancelled while entering integer.");
}



// 3. Program should accept 3 inputs from the user and calculate simple interest for the given inputs. Formula: SI=(P*R*n)/100)

function calculateSI(p, t, r) {
    p = parseFloat(p);
    t = parseFloat(t);
    r = parseFloat(r);

    if (isNaN(p) || isNaN(t) || isNaN(r) || p <= 0 || t <= 0 || r <= 0) {
        alert("Enter valid details!!");
    }

    return ((p * t * r) / 100);
}

let principal = prompt("Enter the Pricipal amount: ");
let time = prompt("Enter the Time period: ");
let rate = prompt("Enter the Rate of Interest: ");

let SI = calculateSI(principal, time, rate);
alert("Simple Interest: " + SI);



// 4. Write a program to check whether a student has passed or failed in a subject after he    or she enters their mark (pass mark for a subject is 50 out of 100).

function checkResult() {
    let mark = prompt("Enter marks of the Student: ");

    if (isNaN(mark) || mark < 0 || mark > 100) {
        console.log("Invalid Entry!! Please Enter valid marks: ");
        return checkResult();
    }
    else {
        mark = parseFloat(mark);
        if (mark < 50) {
            return 'Fail';
        }
        else {
            return 'Pass';
        }
    }


}
let result = checkResult();
console.log(result);
alert(result);



// 5. Write a program to show the grade obtained by a student after he/she enters their total mark percentage.

function checkResult() {
    let mark = prompt("Enter marks of the Student: ");

    if (mark === "" || isNaN(mark) || mark < 0 || mark > 100) {
        console.log("Invalid Entry!! Please Enter valid marks: ");
        return checkResult();
    }
    else {

        mark = parseFloat(mark);

        if (mark > 90) {
            return 'A';
        }
        else if (mark > 80) {
            return 'B';
        }
        else if (mark > 70) {
            return 'C';
        }
        else if (mark > 60) {
            return 'D';
        }
        else if (mark > 50) {
            return 'E';
        }
        else {
            return 'Fail';
        }
    }
}

let result = checkResult();
console.log("Grade: ", result);
alert("Grade: " + result);



// 6. Using the ‘switch case’ write a program to accept an input number from the user and output the day as follows.

function selectDay() {
    let opt = prompt("Enter an option 1-7 to choose your day: ");

    if (opt === null) {
        console.log("User cancelled the input");
        return 'User cancelled the input!';  // Return null to indicate cancellation
    }

    opt = parseInt(opt.trim());

    switch (opt) {
        case 1: return 'Monday';
        case 2: return 'Tuesday';
        case 3: return 'Wednesday';
        case 4: return 'Thursday';
        case 5: return 'Friday';
        case 6: return 'Saturday';
        case 7: return 'Sunday';
        default: return 'Invalid Entry'
    }

}

alert(selectDay());



// 7. Write a program to print the multiplication table of given numbers.

function printMultiplication() {
    let num = prompt("Enter a number to display its Multiplication table: ");

    if (num === null || num === "") {
        console.warn("No Input!");
    }

    else if (isNaN(num)) {
        console.log("Enter a valid number!!");
    }
    else {
        for (i = 1; i <= 10; i++) {
            console.log(i + ' x ' + num + ' = ' + (i * num));
        }
    }
}

printMultiplication();



// 8. Write a program to find the sum of all the odd numbers for a given limit

function sumofOdd() {
    let limit = prompt("Enter a number to get the sum of all odd numbers inside that limit: ");

    if (limit === null) { // User canceled 
        console.warn("User cancelled the prompt.");
        return;
    }

    limit = limit.trim();

    if (limit === "" || isNaN(limit) || parseInt(limit) <= 0) {
        console.log("Enter valid number!!");
        return sumofOdd();
    }
    else {
        limit = parseInt(limit);
    }

    let sum = 0;

    for (let i = 1; i <= limit; i++) {
        if (i % 2 != 0) {
            sum += i;
        }
    }
    console.log(sum);
}

sumofOdd();



// 9. Write a program to print the following pattern (hint: use nested loop)
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5

function printPattern() {
    for (let i = 1; i <= 5; i++) {
        let k = "";
        for (let j = 1; j <= i; j++) {
            k += j + " ";
        }
        console.log(k.trim());
    }
}

printPattern();

// 10. Program should accept an array from the user, swap the values of two arrays and display it on the console

function swapArrays(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        console.log("Arrays must be of the same size.");
        return;
    }

    // Swapping the arrays
    [arr1, arr2] = [arr2, arr1];

    console.log("Arrays after swapping:");
    console.log("Array1:", arr1.join(", "));
    console.log("Array2:", arr2.join(", "));
}

// Taking input from the user
let size = parseInt(prompt("Enter the size of arrays: "));

if (isNaN(size) || size <= 0) {
    console.log("Please enter a valid positive number.");
} else {
    let arr1 = prompt("Enter the values of Array 1: ").split(",").map(Number);
    let arr2 = prompt("Enter the values of Array 2: ").split(",").map(Number);

    if (arr1.length !== size || arr2.length !== size) {
        console.log("Error: The number of values entered does not match the specified size.");
    } else {
        swapArrays(arr1, arr2);
    }
}



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