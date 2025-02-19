// 18. Write a program to find the grade of a student during his academic year. 
// Program should accept the scores for written test, lab exams and assignments
// Output the grade of a student (using weighted average) 

function checkGrade() {
    writmrks = parseFloat(prompt("Written test = "));
    labmrks = parseFloat(prompt("Lab exams = "));
    asmtmrks = parseFloat(prompt("Assignments = "));

    if (isNaN(writmrks) || isNaN(labmrks) || isNaN(asmtmrks) ||
        writmrks > 100 || writmrks < 0 || labmrks > 100 || labmrks < 0 || asmtmrks > 100 || asmtmrks < 0) {
        console.log("Invalid entry!! Please re-enter marks");
        return checkGrade();
    }

    let grade = ((writmrks * 70) / 100) + ((labmrks * 20) / 100) + ((asmtmrks * 10) / 100);

    console.log("Grade of the stdent is: ",grade.toFixed(3));
}

checkGrade();