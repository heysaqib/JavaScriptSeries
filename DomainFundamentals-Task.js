// 1. Accept a char input from the user and display it on the console.

    let char = prompt("Enter a Character:");

    function checkSingleChar(c) {
        //check if only a single character is entered by user
        if (char.length === 1) {
            console.log("The Entered character is:", char);
        }//else prompt user to re-enter a single character
        else {
            char = prompt("Please enter a single character instead!");
            checkSingleChar(char);
        }
    }
//Invoke the function to check whether the user has entered single character 
checkSingleChar(char);

// 2. Accept two inputs from the user and output their sum.

    //Accept first number only as Integer
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