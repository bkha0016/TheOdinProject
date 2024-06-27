// This is a global variable
let globalAge = 23;

// This is a function - and hey, a curly brace indicating a block
function printAge(age) {
    // This is a function scoped variable
    var varAge = 34;

    // This is yet another curly brace, and thus a block
    if (age > 0) {
        // This is a block-scoped varibale that exist
        // within its nearest enclosing block, the if's block
        const constAge = age * 2;
        console.log(constAge);
    }

    // ERROR! We tried to access a block scoped variable
    // not within its scope
    // console.log(constAge);

};

printAge(globalAge);

// ERROR! We tried to access a function scoped variable
// outside the function it's defined in
// console.log(varAge);

function makeAdding (firstNumber) {
    // "first" is scoped within the makeAdding function
    const first = firstNumber;
    return function resulting (secondNumber) {
        // "second" is scoped within the resulting function
        const second = secondNumber;
        return first + second;
    }

};

// but we've not seen an example of a "function"
// being returned, thus far - how do we use it
const add5 = makeAdding(5);
console.log(add5(2)); // logs 7

// FACTORY FUNCTIONS
// Instead of using the new keyword to create an object, factory functions set up and return the new object when you call the function
// They do not use the prototype, which incurs a performance penalty

const User = function(name) {
    this.name = name;
    this.discordName = "@" + name;
};

// hey, this is a constructor -
// then this can be refactored into a factory!

// function createUser (name) {
//     const discordName = "@" + name;

//     return { name, discordName };
// }
// and that's very similar, except since it's just a function,
// we don't need a new keyboard

// DESTRUCTURING
// extract values from an object/array

const obj = {a: 1, b: 2};
const { a, b} = obj;
// This creates two variables, a and b,
// which are equivalent to
// const a = obj.a;
// const b = obj.b;

const array = [1, 2, 3, 4, 5];
const [ zerothEle, firstEle ] = array;
// This creates zerothEle and firstEle, both of which point
// to the elements in the 0th and 1st indicies of the array


// PRIVATE VARIABLES AND FUNCTIONS
// EXTEND OUR USER FACTORY TO ADD A FEW MORE VARIABLES AND INTRODUCE PRIVATE ONES

function createUser (name) {
    const discordName = "@" + name;

    let reputation = 0;
    const getReputation = () => reputation;
    const giveReputation = () => reputation++;

    return { name, discordName, getReputation, giveReputation};
}

const josh = createUser("josh");
josh.giveReputation();
josh.giveReputation();

console.log({
    discordName: josh.discordName,
    reputation: josh.getReputation()

});

function createPlayer (name, level) {
    const { getReputation, giveReputation } = createUser(name);

    const increaseLevel = () => level++;
    return { name, getReputation, giveReputation, increaseLevel };
}

// EXAMPLE: Factory Function of a Calculator
const calculator = (function() {
    const add = (a, b) => a + b;
    const sub = (a, b) => a - b;
    const mul = (a, b) => a * b;
    const div = (a, b) => a / b;
    return{ add, sub, mul, div};
})();

calculator.add(3, 5);
calculator.sub(6, 2);
calculator.mul(14, 5534);







