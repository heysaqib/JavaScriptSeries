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

    for(let i = 1; i <= limit; i++) {
        if(i % 2 != 0) {
            sum += i;
        }
    }
    console.log(sum);
}

sumofOdd();