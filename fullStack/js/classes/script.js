// Property getters and setters
let obj = {
    get propName() {
        // getter, the code executed on getting obj .propName
        
    },
    set propName(value) {
        // setter, the code executed on setting obj.propName = value

    }
}

// example on username
let user = {
    name: "John",
    surname: "Smith",

    get fullName() {
        return `${this.name} ${this.surname}`;
    },

    set fullName(value) {
        [this.name, this.surname] = value.split(" ");
    }  
};

// set fullName is executed with the given value
console.log(user.fullName);
user.fullName = "Alice Cooper";

console.log(user.fullName);
console.log(user.name, user.surname);

// CLASS BASIC SYNTAX

class User {
    constructor(name) {
        this.name = name;
    }

    sayHi() {
        console.log(this.name);
    }

    
}

// Usage:
let newUser = new User("John");
newUser.sayHi();

// USAGES OF CLASS
class Rectangle {
    // PRIVATE FIELDS, can be defined as below
    // #height = 0; #width;
    // error to reference private fields from outside of the class
    // they can only be read or written within the class body

    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
    // Getter
    get area() {
        return this.calcArea();
    }

    // Method
    calcArea() {
        return this.height * this.width;
    }

    *getSides() {
        yield this.height;
        yield this.width;
        yield this.height;
        yield this.width;

    }
}

// another example: point
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    static displayName = "Point";
    static distance(a, b) {
        const dx = a.x - b.x;
        const dy = a.y - b.y;


        return Math.hypot(dx, dy);
    }
}

const p1 = new Point(5, 5);
const p2 = new Point(10, 10);


console.log(Point.displayName); 
console.log(Point.distance(p1, p2));

// INHERITANCE

class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a noise.`);
    }
}

class Dog extends Animal {
    constructor(name) {
        super(name); 
        // call the super class constructor and pass in the name parameter
    }

    speak() {
        console.log(`${this.name} barks.`);
    }
}

const d = new Dog("Mitzie");
d.speak();
console.log(d.name);

class Cat {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a noise.`);
    }
}

class Lion extends Cat {
    speak() {
        super.speak();
        console.log(`${this.name} roars.`);
    }
}


const l = new Lion("fuzzy");
l.speak();
