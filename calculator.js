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
        let choice = prompt("\nChoose an operation:\n1. Addition \n2. Subtraction \n3. Multiplication \n4. Division \n5. Exit\n\n");

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