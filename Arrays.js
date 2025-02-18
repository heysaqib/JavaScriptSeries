let cars = ["VW", "Suzuki", "Mahindra", "Tata"];

//display the array elements
console.log(cars);
console.log(cars[0]);
console.log(cars[1]);
console.log(cars[2]);
console.log(cars[3]);
console.log("Fourth array element is",cars[4]);

//add a new element to the end
cars.push("BYD");
console.log("Fourth array element is",cars[4]);
console.log(cars);

//remove the added element from the end
cars.pop();
console.log(cars);

//add an element to the start
cars.unshift("Skoda");
console.log(cars);

// remove an element from the start
cars.shift();
console.log(cars);

//find an index
let index = cars.indexOf("Mahindra");
console.log(index);

//display all elements
for (let i=0; i<=cars.length-1;i++) { // can also use 'for(let car in cars)'
    console.log(cars[i]);
}

//copy array to a new array
let newCars = [];
for (let i=0; i<=cars.length-1;i++) {
    newCars.push(cars[i]);
}
console.log("New Array :",newCars);

//print array in reverse

for (let i = newCars.length-1; i >= 0; i--) {
    console.log(newCars[i]);
}

//sort an array
cars.sort();
console.log(cars);
//reverse sort
cars.sort().reverse(); 
console.log(cars);