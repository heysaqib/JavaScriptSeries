// 7. Write a program to print the multiplication table of given numbers.

function printMultiplication() {
    let num = prompt("Enter a number to display its Multiplication table: ");

    if (num === null || num==="") {
        console.warn("No Input!");
    }

    else if (isNaN(num)) {
        console.log("Enter a valid number!!");
    }
    else {
        for(i = 1; i <= 10; i++) {
            console.log(i + ' x ' + num + ' = ' + (i*num));
        }
    }
}

printMultiplication();