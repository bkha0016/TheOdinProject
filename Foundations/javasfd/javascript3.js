//normal way of function
function add7(num1){
    return num1 + 7; 
} 

let add8 = (num1) => num1 + 8;

//do it on a arrow mode =>

let multiply = (num1, num2) => num1 * num2;


//mutate the variable using let

let capitalize = function(s1){
    return s1.toUpperCase();
}

let capitalize1 = (s1) => s1.toUpperCase();


let lastLetter = function(s2){
    return s2.slice(-1);
}

let lastLetter1 = (s2) => s2.slice(-1);


console.log(lastLetter("apple"));
console.log(capitalize("apple"));

console.log(multiply(3,2));