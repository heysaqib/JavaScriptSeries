let cars = ["VW", "Suzuki", "Mahindra", "Tata"];

//display the array elements
console.log(cars);
console.log(cars[0]);
console.log(cars[1]);
console.log(cars[2]);
console.log(cars[3]);
console.log("Fourth array element is",cars[4]);

//add a new element to the end
cars.push("BYD");
console.log("Fourth array element is",cars[4]);
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
for (let i=0; i<=cars.length-1;i++) { // can also use 'for(let car in cars)'
    console.log(cars[i]);
}

//copy array to a new array
let newCars = [];
for (let i=0; i<=cars.length-1;i++) {
    newCars.push(cars[i]);
}
console.log("New Array :",newCars);

//print array in reverse

for (let i = newCars.length-1; i >= 0; i--) {
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

        swapArrays(arr1,arr2);

        //display arrays after swapp
        console.log("Array 1 after swap: ", a.join(","));
        console.log("Array 2 after swap: ", b.join(","));
    }

// 11. Program should accept an array and display the number of even numbers contained in that array

function countEvenNum() {
    let input = prompt(`Enter the array elements (comma-separated): `);

    //handle cancel event
    if(input === null) {
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