<<<<<<< HEAD
//basic tool for looping through a collection is the array loop

const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

for (const cat of cats){
    console.log(cat);
}

//map() to do something to each item in the collection
function toUpper(string){
    return string.toUpperCase();
}

const upperCats = cats.map(toUpper);
console.log(upperCats);

//filter() to filter out the arrays
function lCat(cat){
    return cat.startsWith("L");
}

const filtered = cats.filter(lCat);
console.log(filtered);

/* 
The standard for loop

for (initializer; condition; final-expression) {

}

initializer: varaible set to a number, which is incremented to counter or refers to counter variable
condition: defines when the loop should stop looping
Final-expression: serves to increment the counter variable, to bring it closer to the point where the
conditions is no longer TRUE

function calculate() {
  for (let i = 1; i < 10; i++) {
    const newResult = `${i} x ${i} = ${i * i}`;
    results.textContent += `${newResult}\n`;
  }
  results.textContent += '\nFinished!';
}

const cats = ['Pete', 'Biggles', 'Jasmine'];

let myFavoriteCats = 'My cats are called ';

for (const cat of cats) {
  myFavoriteCats += `${cat}, `
}

console.log(myFavoriteCats); 
// "My cats are called Pete, Biggles, Jasmine, "


*/

//Active learning: Launch countdown
const output = document.querySelector('.output');
output.innerHTML = "";

for (let i = 10; i >= 0; i--) {
    const para = document.createElement('p');

    if (i === 10){
        para.textContent = `Countdown ${i}`;
    } else if (i === 0) {
        para.textContent = "Blast off!";
    } else {
        para.textContent = i;
    }

    output.appendChild(para);
    
};



=======
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
>>>>>>> 515bab1f733eb532f12df3acafbbd78937ccc9a9
