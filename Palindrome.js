// 13. Write a program to identify whether a string is a palindrome or not


function isPalindrome() {

    let str = prompt("Enter the string to check for a palindrome: ");

    if (str === null) {
        console.log("Cancelled by user!!");
        return null;
    }

    if (str === "") {
        console.log("Input empty!!");
        return isPalindrome();
    }

    //remove spaces and normalize the string to lowercase
    normStr = str.replace(/\s+/g, "").toLowerCase();

    //split the string to array of characters
    let revArr = normStr.split("");

    //reverse it & form a string again
    let revStr = revArr.reverse().join("");

    //compare both strings
    if (normStr == revStr) {
        console.log("Palindrome!!");
    }
    else {
        console.log("Not a Palindrome!!");
    }
}

isPalindrome();