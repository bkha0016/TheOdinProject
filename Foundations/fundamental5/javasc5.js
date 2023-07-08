/* An empty object ("empty cabinet") can be created using one of two syntaxes */
let user = new Object(); // object constructor syntax
user = {}; // object literal syntax

// place properties into {} as key:value pairs
user = {
    name: 'John',
    age: 30
};

console.log(user.name, user.age);

// adding anoter key:value pairs
user.isAdmin = true;

console.log(user);

// remove a property, we can use a delete operator
delete user.age;

// multiword property names, must be quoted
user = {
    name: "John",
    age: 30,
    "likes birds": true
};

console.log(user, user["likes birds"]);

delete user["likes birds"];


/* we can use square brackets in an object literal, when creating an object 
let fruit = prompt("which fruit to buy?", "apple");

let bag = {
    [fruit] : 5,
}

console.log(bag[fruit]);
*/

function makeUser(name, age) {
    return {
        name: name,
        age: age,
        pablo: true,
    };
};

user = makeUser("Bob", 25);
console.log(user.name, user.age);

// ! Property names limitations: for, let, return, etc

// a for loop for object

for (let key in user){
    console.log(key);
    console.log("----");
    console.log(user[key]);
};

let codes = {
    "+49": "Germany",
    "+41": "Switzerland",
    "+44": "Great Britain",
    // ..,
    "+1": "USA"
  };
  
  for (let code in codes) {
    console.log( +code ); // 49, 41, 44, 1
  }

  /* 
    Create an empty object user.
    Add the property name with the value John.
    Add the property surname with the value Smith.
    Change the value of the name to Pete.
    Remove the property name from the object.
  */

let users = {};
users["name"] = "John";
users.surname = "Smith";
console.log(users);
users.name = "Pete";
console.log(users);
delete users.name;
console.log(users);

let schedule = {}

function isEmpty(schedule) {
    for (let key in schedule){
        return false;
    }
    return true;
}

console.log(isEmpty(schedule));

schedule["8:30"] = "get up";


console.log(isEmpty(schedule));

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130,
}


function sumSalaries(obj){
    let sum = 0
    for(let key in obj){
        sum += obj[key]
    };
    return sum;
}

console.log(sumSalaries(salaries));


const person = {
    name: ["Bob", "Smith"],
    age: 32,
    bio: function () {
        console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
    },
    introduceSelf: function () {
        console.log(`Hi! I'm ${this.name[0]}.`);
      },
};

console.log(person.bio(), person.introduceSelf(), person.age);







