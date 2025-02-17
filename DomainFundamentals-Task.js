// 1. Accept a char input from the user and display it on the console.

        // let char = prompt("Enter a Character:");

        // function checkSingleChar(c) {
        //     //check if only a single character is entered by user
        //     if (char.length === 1) {
        //         console.log("The Entered character is:", char);
        //     }//else prompt user to re-enter a single character
        //     else {
        //         char = prompt("Please enter a single character instead!");
        //         checkSingleChar(char);
        //     }
        // }
        // //Invoke the function to check whether the user has entered single character 
        // checkSingleChar(char);

// 2. Accept two inputs from the user and output their sum.
        
        //Accept first number only as Integer
        function getInteger(){
            var num; 
            do{
                num = prompt("Enter the first number as an integer:");
            }while (isNaN(num) || num.trim === "" || !Number.isInteger(parseFloat(num)));
            
            return parseInt(num);
        }
        //Accept second number only as Decimal
        function getDecimal(){
            var num; 
            do{
                num = prompt("Enter the second number as a decimal:"); 
            }while (isNaN(num) || num.trim === "" || Number.isInteger(parseFloat(num)));
            
            return parseFloat(num);
        }
        
        var num1 = getInteger(); 
        var num2 = getDecimal();
        var Sum = parseFloat(num1+num2);
        
        console.log("Entered numbers are:",num1,num2);
        console.log("Sum is:", Sum);
                        