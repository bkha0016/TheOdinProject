//let or var for a mutable variable
//const for immutable variable

let message = "Hello, World!";
console.log(message);

/* 
widespread practiece to use constants as aliases for difficult to remember
values that are known prior to execution. Such constants are named
using capital letters and underscores
For instance, lets make constans for colors in so-called "web" format:
*/

const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";

let color = COLOR_GREEN;

console.log(color);

//working with variables

let name = "John"; let admin = name;

console.log(admin);

//giving the right name
let planetE = "Earth";
let currVis = "Bobby";


let x = "100";
let y = "10";

console.log(x / y);
console.log(x * y);
console.log(x + y);
console.log(x - y);