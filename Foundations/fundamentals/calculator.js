const add = function(a,b) {
    return a + b;
};

const subtract = function(a,b) {
    return a - b;
	
};

const sum = function(arr) {
    let total = 0;
    for(i in arr){
        total += i;
    };
    return total;
	
};

const multiply = function(a,b) {
    return a * b;

};

const power = function(a,b) {
    return a ** b;

};

const factorial = function(n) {
    if (n === 0){
        return 1;
    }
    else{
        return n * factorial(n-1);
    }
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};