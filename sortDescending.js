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