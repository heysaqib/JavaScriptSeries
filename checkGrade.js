// 5. Write a program to show the grade obtained by a student after he/she enters their total mark percentage.

function checkResult() {
    let mark = prompt("Enter marks of the Student: ");

    if (mark === "" || isNaN(mark) || mark < 0 || mark > 100) {
        console.log("Invalid Entry!! Please Enter valid marks: ");
        return checkResult();
    }
    else {

        mark = parseFloat(mark);

        if (mark > 90) {
            return 'A';
        }
        else if (mark > 80) {
            return 'B';
        }
        else if (mark > 70) {
            return 'C';
        }
        else if (mark > 60) {
            return 'D';
        }
        else if (mark > 50) {
            return 'E';
        }
        else {
            return 'Fail';
        }
    }
}

let result = checkResult();
console.log("Grade: ",result);
alert("Grade: " + result);