// 6. Using the ‘switch case’ write a program to accept an input number from the user and output the day as follows.

function selectDay() {
    let opt = prompt("Enter an option 1-7 to choose your day: ");

    if (opt === null) {
        console.log("User cancelled the input");
        return 'User cancelled the input!';  // Return null to indicate cancellation
    }

    opt = parseInt(opt.trim());
    
    switch (opt) {
        case 1: return 'Monday';
        case 2: return 'Tuesday';
        case 3: return 'Wednesday';
        case 4: return 'Thursday';
        case 5: return 'Friday';
        case 6: return 'Saturday';
        case 7: return 'Sunday';
        default: return 'Invalid Entry'
    }

}

alert(selectDay());