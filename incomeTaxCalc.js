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
