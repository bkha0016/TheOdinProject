const cars = ["Saab", 
"Volvo", 
"BMW"
];

// adding item into the array
cars[3] = "Prada";
console.log(cars);

//changing the array
cars[0] = "Ferrari";

//support multiple datatypes in JS array
cars[2] = 54;
console.log(cars);

//using javascript keyword new
const motors = new Array("Saab", "Volvo", "BMW");
console.log(motors);

//objects use names to access its members
const person = {firstName:"John", lastName:"Doe", age:46};
console.log(person["firstName"]);

//javascript array methods
const fruits = ["Banana", "Orange", "Apple", "Mango"];
//toString() converts an array to a string of (comma separated)
fruits.toString();

//join() method also joins all array elemetns into a string
fruits.join(" * ");

//pop() method removes the last element from an array
fruits.pop();

//push() method adds a new element to an array (at the end)
fruits.push();

//shift() method removes the first array element and "shifts" all other elements to a lower index
fruits.shift();

//unshift() method adds a new element to an array (at the beginning)
fruits.unshift();

//concat() method creates new array by merging existing arrays:
const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];

const myChildren = myGirls.concat(myBoys);

//splice() can be used to add new items to an array

const fruity = ["Banana", "Orange", "Apple", "Mango"];
fruity.splice(2, 0, "Lemon", "Kiwi");

//slice() slices out a pirce of an array into a new array
const cirtus = fruity.slice(1);