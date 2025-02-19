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