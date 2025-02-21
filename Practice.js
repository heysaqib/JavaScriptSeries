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



// 16. Program should accept an input from the user and display whether the number is prime or not

function isPrime() {
    let num = prompt("Enter a number: ");

    if (num === null || num === "" || isNaN(num)) {//check for valid input
        console.log("***Enter a VALID number***");
        return isPrime();
    }

    num = parseInt(num.trim());//trim the spaces and convert into number

    if (num < 2) {//edge case -ve integers, 0 and 1 are not prime
        console.log(`${num} is NOT a PRIME NUMBER`);
        return;
    }

    if (num === 2) {//2 is the only prime number
        console.log(`${num} is a PRIME NUMBER`);
        return;
    }

    for (let i = 2; i <= Math.sqrt(num); i++) {//check for prime for all cases > 2
        if (num % i === 0) {
            console.log(`${num} is NOT a PRIME NUMBER`);
            return;
        }
    }

    console.log(`${num} is a PRIME NUMBER`);

}

isPrime();//call the isPrime() function



//17. Write a menu driven program to do the basic mathematical operations such as    addition, subtraction, multiplication and division

class Calculator { //Calclator class with fnctions to +,-,* and /
    addition(a, b) {
        return a + b;
    }

    subtraction(a, b) {
        return a - b;
    }

    multiplication(a, b) {
        return a * b;
    }
    division(a, b) {
        if (b === 0) {
            return "Error: Division by zero!";
        }
        return a / b;
    }
}

function main() {
    //create a new object of the class Calculator()
    let calc = new Calculator();

    //this block of code keeps on running until a break statement is encountered
    while (true) {
        let choice = prompt("Choose an operation:\n1. Addition \n2. Subtraction \n3. Multiplication \n4. Division \n5. Exit");

        //handle cancel event
        if (choice === null) {
            console.log("User pressed cancel button");
            return;
        }

        //handle empty input
        if (choice.trim() === "") {
            console.log("Choice cannot be empty!");
            continue;
        }

        choice = parseInt(choice.trim()); //remove spaces and convert into integer

        //log invalid choice for all inputs other than the listed choices
        if (![1, 2, 3, 4, 5].includes(choice)) {
            console.log("Invalid choice! Please re-enter your choice.");
            continue;
        }

        //end the program when choice 5 is entered
        if (choice === 5) {
            console.log("Program exited!!");
            break;
        }

        //get both numbers as input
        let num1 = parseFloat(prompt("Enter the first number: "));
        let num2 = parseFloat(prompt("Enter the second number: "));


        //check if entered numbers are valid or not
        if (isNaN(num1) || isNaN(num2)) {
            console.log("Please enter valid numbers!");
            continue;
        }

        let result;

        //switch statement to switch between options
        switch (choice) {
            case 1: result = calc.addition(num1, num2);
                console.log(`${num1} + ${num2} = ${result}`);
                break;

            case 2: result = calc.subtraction(num1, num2);
                console.log(`${num1} - ${num2} = ${result}`);
                break;

            case 3: result = calc.multiplication(num1, num2);
                console.log(`${num1} x ${num2} = ${result}`);
                break;

            case 4: result = calc.division(num1, num2);
                console.log(`${num1} / ${num2} = ${result}`);
                break;

        }
    }
}

main();



// 18. Write a program to find the grade of a student during his academic year. 
// Program should accept the scores for written test, lab exams and assignments
// Output the grade of a student (using weighted average) 

function checkGrade() {
    writmrks = parseFloat(prompt("Written test = "));
    labmrks = parseFloat(prompt("Lab exams = "));
    asmtmrks = parseFloat(prompt("Assignments = "));

    if (isNaN(writmrks) || isNaN(labmrks) || isNaN(asmtmrks) ||
        writmrks > 100 || writmrks < 0 || labmrks > 100 || labmrks < 0 || asmtmrks > 100 || asmtmrks < 0) {
        console.log("Invalid entry!! Please re-enter marks");
        return checkGrade();
    }

    let grade = ((writmrks * 70) / 100) + ((labmrks * 20) / 100) + ((asmtmrks * 10) / 100);

    console.log("Grade of the stdent is: ",grade.toFixed(3));
}

checkGrade();



// 19. Write a program to find out the income tax amount of a person.
// Program should accept annual income of a person
// Output the amount of tax he has to pay

function calcIncomeTax(amt) {
    let tax;
    if (amt > 1000000 && amt <= 5000000) {//10L to 50L
        tax = amt * 0.3;
    }
    else if (amt > 500000 && amt <= 1000000) {//5L to 10L
        tax = amt * 0.2;
    }
    else if (amt > 250000 && amt <= 500000) {//2.5L to 5L
        tax = amt * 0.05;
    }
    else {//less than 2.5L
        tax = 0;
    }
    return tax;
}

let income = parseFloat(prompt("Enter the annual income\n"));

if (isNaN(income) || income < 0) {//check for invalid input
    console.log("Invalid income! Please enter a valid positive number.");
} else {
    let tax = parseFloat(calcIncomeTax(income));//func call
    console.log("Income tax amount = ",tax.toFixed(2));
}



// 20. Write a program to print the following pattern using for loop
// 1
// 2	3
// 4	5	6
// 7	8	9	10

let num = 1; // Start from 1

for (let i = 1; i <= 4; i++) {  // Loop for rows
    let rowStr = "";  

    for (let j = 1; j <= i; j++) { // Loop for numbers in each row
        rowStr += num + "\t";  // Append number with tab space
        num++;  // Increment number
    }

    console.log(rowStr); // Print row
}



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



// 24. Write a menu driven program to calculate the area of a given object.

// Parent Class: Area
class Area {
    circle(radius) {
      return 3.14 * radius * radius;
    }
  
    square(length) {
      return length * length;
    }
  
    rectangle(length, width) {
      return length * width;
    }
  
    triangle(base, height) {
      return 0.5 * base * height;
    }
  }
  
  // Child Class: MyClass extends Area
  class MyClass extends Area {
    menu() {
      while (true) {
        console.log("\nEnter your choice:");
        console.log("1. Circle");
        console.log("2. Square");
        console.log("3. Rectangle");
        console.log("4. Triangle");
        console.log("5. Exit");
  
        let choice = prompt("Choice: ");
  
        switch (choice) {
          case "1":
            this.circleArea();
            break;
          case "2":
            this.squareArea();
            break;
          case "3":
            this.rectangleArea();
            break;
          case "4":
            this.triangleArea();
            break;
          case "5":
            console.log("\nExiting the program.");
            return;
          default:
            console.log("\nInvalid choice. Please try again.");
        }
      }
    }
  
    circleArea() {
      let radius = parseFloat(prompt("\nEnter the radius: "));
      if (isNaN(radius) || radius <= 0) {
        console.log("\nInvalid input. Please enter a valid number.");
        return;
      }
      let result = this.circle(radius);
      console.log(`\nArea of the circle is: ${result.toFixed(2)}`);
    }
  
    squareArea() {
      let length = parseFloat(prompt("\nEnter the length: "));
      if (isNaN(length) || length <= 0) {
        console.log("\nInvalid input. Please enter a valid number.");
        return;
      }
      let result = this.square(length);
      console.log(`\nArea of the square is: ${result}`);
    }
  
    rectangleArea() {
      let length = parseFloat(prompt("\nEnter the length: "));
      let width = parseFloat(prompt("\nEnter the width: "));
      if (isNaN(length) || isNaN(width) || length <= 0 || width <= 0) {
        console.log("\nInvalid input. Please enter valid numbers.");
        return;
      }
      let result = this.rectangle(length, width);
      console.log(`\nArea of the rectangle is: ${result}`);
    }
  
    triangleArea() {
      let base = parseFloat(prompt("\nEnter the base: "));
      let height = parseFloat(prompt("\nEnter the height: "));
      if (isNaN(base) || isNaN(height) || base <= 0 || height <= 0) {
        console.log("\nInvalid input. Please enter valid numbers.");
        return;
      }
      let result = this.triangle(base, height);
      console.log(`\nArea of the triangle is: ${result}`);
    }
  }
  
  // For prompt input in Node.js
  const prompt = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  // Helper function for synchronous input
  function promptSync(question) {
    return new Promise((resolve) => {
      prompt.question(question, (input) => resolve(input));
    });
  }
  
  // Overriding prompt function globally
  global.prompt = promptSync;
  
  // Running the program
  (async () => {
    const obj = new MyClass();
    await obj.menu();
    prompt.close();
  })();
  



// 25. Write a Javascript program to display the status (I.e. display book name, author name & reading status) of books. You are given an object library in the code's template. It contains a list of books with the above mentioned properties.

// Given library object
var library = [ 
    {
        title: 'Bill Gates',
        author: 'The Road Ahead',
        readingStatus: true
    },
    {
        title: 'Steve Jobs',
        author: 'Walter Isaacson',
        readingStatus: true
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        readingStatus: false
    }
];

// Function to display the reading status of each book
function displayBookStatus(library) {
    for (let i = 0; i < library.length; i++) {
        let book = library[i];
        if (book.readingStatus) {
            console.log(`Already read '${book.title}' by ${book.author}.`);
        } else {
            console.log(`You still need to read '${book.title}' by ${book.author}.`);
        }
    }
}

// Call the function to display book statuses
displayBookStatus(library);




// 26. Given a variable named my_string, try reversing the string using  my_string.split().reverse().join() and then print the reversed string to the console. If the try clause has an error, print the error message to the console. Finally, print the typeof of the my_string variable to the console.

// Function to reverse a string with error handling
function reverseString(my_string) {
    try {
        // Attempt to reverse the string
        my_string = my_string.split("").reverse().join("");
        console.log(`Reversed string is : ${my_string}`);
    } catch (err) {
        // Handle any errors that occur during reversal
        console.log(`Error : ${err.message}`);
    } finally {
        // Print the type of my_string regardless of success or error
        console.log(`Type of my_string is : ${typeof my_string}`);
    }
}

// Testing the function with different inputs
reverseString("1234");  // Valid string input
reverseString(1234);    // Invalid input to trigger an error



// 27. Given a variable named my_height, you must throw errors under the following conditions:
         notANumberError- When my_heightis NaN
         HugeHeightError – When my_heightis greater than
         TinyHeight Error - When my_heightis less than


// Function to validate height and throw appropriate errors
function validateHeight(my_height) {
    // Check if height is not a number (NaN)
    if (isNaN(my_height)) {
        throw new Error("notANumberError");
    }

    // Check if height is too large
    if (my_height > 50) { // Considering 50 as the limit
        throw new Error("hugeHeightError");
    }

    // Check if height is too small
    if (my_height < 5) { // Considering 5 as the lower limit
        throw new Error("tinyHeightError");
    }

    // If none of the errors are triggered, return the valid height
    return my_height;
}

// Testing the function with different inputs
function testHeight(input) {
    try {
        let result = validateHeight(input);
        console.log(result);
    } catch (error) {
        console.log(error.message);
    }
}

// Running the provided test cases
testHeight("seven"); // Should output: notANumberError
testHeight(77);      // Should output: hugeHeightError
testHeight(0);       // Should output: tinyHeightError
testHeight(8);       // Should output: 8




// 28.Create a constructor function that satisfies the following conditions:
// The name of the constructor function should be Car.
// It should take three parameters: name, mileage and max_speed.
// Store these parameter values in their respective thiskeywords: this.name, this.mileage and this.max_speed.


// Constructor function for Car
function Car(name, mileage, max_speed) {
    this.name = name;           // Assign name to this.name
    this.mileage = mileage;     // Assign mileage to this.mileage
    this.max_speed = max_speed; // Assign max_speed to this.max_speed
}

// Creating instances of Car
let car1 = new Car("Toyota Camry", 25, 180);
let car2 = new Car("Honda Civic", 30, 200);

// Display car details
console.log("Car 1:", car1);
console.log("Car 2:", car2);



// 29. Write a myFilter function that takes 2 parameters: myArray and callback. Here, myArray is an array of numbers and callback is a function that takes the elements of myArray as its parameter and returns a boolean true if the sum of the number is even or   false if the sum of the number  is odd.

// Define the myFilter function
function myFilter(myArray, callback) {
    // Calculate the sum of all elements in the array
    let sum = 0;
    for (let i = 0; i < myArray.length; i++) {
        sum += myArray[i];
    }

    // Call the callback function with the sum
    let isEven = callback(sum);
    //console.log("Is the sum even?", isEven);

    // Return the sum
    return sum;
}

// Define the callback function to check even or odd
function isSumEven(sum) {
    return sum % 2 === 0;
}

// Sample input as a number, converting it to an array of digits
let input = prompt();
let myArray = input.split("").map(Number); // Convert string digits to an array of numbers

// Call the myFilter function
let result = myFilter(myArray, isSumEven);
console.log("Sum of the array:", result); // Should print 15
