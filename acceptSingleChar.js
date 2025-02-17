// 1. Accept a char input from the user and display it on the console.

function checkSingleChar() {
    let char = prompt("Enter a character: ");
    //check for input & only one character is entered
    if (char!== null && char.length === 1) {
        return char;
    }
    else {
        alert ("Invalid Entry!! Please Enter a single character: ");
        return checkSingleChar();
    }
}
//display the input
let char = checkSingleChar();
console.log("Entered character is: ", char);
