// Function Statement aka Function Declaration

    function a(){
        console.log("This is a function statement");
    }// When hoisted, function will run properly


// Function Expression

    var b = function (){
        console.log("This is a function expression");
    }// When hoisted, function will give out error as the variable is undefined due to temporal dead zone


// Anonymous Function
// Function without a function name is a anonymous function. We can use anonymous functions only by assigning it to a variable.


// Named Function Expression

    var c = function xyz(){
        console.log("This is a function expression");
    }// Its just the function expression with a function name.

    xyz(); // This throws a ReferenceError bcz you can only access xyz inside the scope of variable b, but not globally.
    c(); // This is the right way to call a Named Function expression


// First Class Functions
// The ability of functions like,
    // ✔ Functions are first class citizens.
    // ✔ Functions can be assigned to variables.
    // ✔ Functions can be passed as arguments to other functions.
    // ✔ Functions can be returned from other functions.
    // is known as First Class Functions


// Arrow Functions
