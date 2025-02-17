// 3. Program should accept 3 inputs from the user and calculate simple interest for the given inputs. Formula: SI=(P*R*n)/100)

function calculateSI(p,t,r) {
    p = parseFloat(p);
    t = parseFloat(t);
    r = parseFloat(r);

    if(isNaN(p) || isNaN(t) || isNaN(r) || p<=0 || t<= 0 || r<=0) {
        alert("Enter valid details!!");
    }

    return ((p*t*r)/100);
}

let principal = prompt("Enter the Pricipal amount: ");
let time = prompt("Enter the Time period: ");
let rate = prompt("Enter the Rate of Interest: ");

let SI = calculateSI(principal,time,rate);
alert("Simple Interest: " + SI);
