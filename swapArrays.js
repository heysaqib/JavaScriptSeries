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

    //display arrays after swap
    console.log("Array 1 after swap: ", a.join(","));
    console.log("Array 2 after swap: ", b.join(","));
}