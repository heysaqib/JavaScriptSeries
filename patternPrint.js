// 9. Write a program to print the following pattern (hint: use nested loop)
    // 1
    // 1 2
    // 1 2 3
    // 1 2 3 4
    // 1 2 3 4 5

    function printPattern() {
        for (let i = 1; i <=5; i++) {
            let k = "";
            for(let j = 1; j <= i; j++) {
                k += j + " ";
            }
            console.log(k.trim());
        }
    }
    
    printPattern();