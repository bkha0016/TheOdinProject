// There are multiple ways to define objects but in most cases ,it is best to use the object literal syntax as follows
const myObject = {
    property: "Value",
    otherProperty: 77,
    "obnoxious property": function() {
        // do stuff!
    }
};

// There are two ways to get infomration out of an object: dot notation and bracket notation
//  dot notation
console.log(myObject.property); // 'Value'

// bracket notation
console.log(myObject["obnoxious property"]); // [Function]

// myObject."obnoxious property" wont work because that property is a string with a space in it. Likewise, you cannot use variables in dot notation
const variable = "property";

console.log(myObject.variable); // this gives us "undefined" because its looking for a property named 'variable' in our object
console.log(myObject[variable]); // this is equivalent to myObject['property'] and returns 'Value!'


// OBJECTS AS A DESIGN PATTERN
// One of the simplest ways you can begin to organize your code is by grouping things into objects. Take these examples from a tic tac toe game:

// example one
const playerOneName = "tim";
const playerTwoName = "jenn";
const playerOneMarker = "X";
const playerTwoMarker = "O";

// example two - USING OBJECTS
const playerOne = {
    name: "tim",
    marker: "X"
};

const playerTwo = {
    name: "jenn",
    marker: "O"
};

// using objects is better to keep alot of things rather than typing each of the variable in the script

// OBJECT CONSTRUCTORS

function Player(name, marker) {
    this.name = name;
    this.marker = marker;
    this.sayName = function() {
        console.log(this.name)
    };
}

// Adding a method to the prototype
Player.prototype.sayHello = function() {
    console.log("Hello, I'm a player!");
};


const player = new Player('steve', 'X');
console.log(player.name); // 'steve'

const player2 = new Player("also steve", "O");
player.sayName();
player2.sayName();
player2.sayHello();
// To check whether to see what the prototype of an object

console.log(Object.getPrototypeOf(player) === Player.prototype); // returns true
console.log(Object.getPrototypeOf(player2) === Player.prototype); // return true


// Output may slightly differ based on the browser
player.valueOf();
player2.valueOf();

// Every prototype object inherits from object.prototype by default
// An object's Object.getPrototypeOf() value can only be one unique prototype object



// Write a constructor for making "Book" objects. 
// Book objects include title, author, number of pages, and whether your read the book or not

function Book(title, author, numPages, isRead) {
    this.title = title;
    this.author = author
    this.numPages = numPages;
    this.isRead = isRead;

    this.info = function() {
        console.log(title, 'by', author, ",", numPages, "pages,", isRead)
    };

};

const Hobbit = new Book("The Hobbit", "J.R.R Tolkien", 295, "not read yet");
Hobbit.info();

// Initialize a constructor function for a new Hero
function Hero(name, level) {
    this.name = name;
    this.level = level;

}

// Now we can create a new instance with new
let hero1 = new Hero("Bjorn", 1);
console.log(hero1.__proto__);
console.log(hero1.__proto__.__proto__);

console.log(Object.getPrototypeOf(hero1));

// Add greet method to the Hero prototype
Hero.prototype.greet = function () {
    return `${this.name} says hello.`;
}

console.log(hero1.greet());

// We can use the call() method to copy over properties from one constructor into another constructor
// Intialize Warrior constructor
function Warrior(name, level, weapon) {
    // Chain constructor with call
    Hero.call(this, name, level);

    // Add a new property
    this.weapon = weapon;
}

// Initialize Healer constructor
function Healer(name, level, spell) {
    Hero.call(this, name, level);

    this.spell = spell;
}


// you can also use prototype to add the attack() method to warrior
// and the heal() method to healer
Warrior.prototype.attack = function () {
    return `${this.name} attacks with the ${this.weapon}`;
}

Healer.prototype.heal = function() {
    return `${this.name} casts ${this.spell}`;
}

// we'll create our chara with the two new chara classes available
hero1 = new Warrior("Bjorn", 1, "axe");
let hero2 = new Healer("Kanin", 1, "cure");


console.log(hero1.attack());
console.log(hero2.heal());

// however the call methods only gets the constructor variable not the methods from their parents
// required the usage of Object.setPropertyOf() to link the properties in Hero constructor to the warrior and healer constructurs, making sure to put it before any additional methods
// Link prototypes and add prototype methods
Object.setPrototypeOf(Warrior.prototype, Hero.prototype);
Object.setPrototypeOf(Healer.prototype, Hero.prototype);

console.log(hero1.greet());
console.log(hero2.greet());









