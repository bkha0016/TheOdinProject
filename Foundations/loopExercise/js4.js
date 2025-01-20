//Exercise 02 - repeatString

function repeatString(aString, aNum){
    let parag = "";
    let i = 0;

    while (i < aNum) {

        parag += aString;
        ++i;
    }
    return parag;
}

console.log(repeatString('hey',3));


//Exercise 03 - Reverse a String

//reverseString(hello there) => ereht olleh
function reverseString(s1){
    let empString = "";
    for (let i = (s1.length - 1); i >= 0; i--) {
      empString += s1[i];
    }
    return empString;
}

console.log(reverseString("hello there"));


//Exercise 04 - Remove From Array
//removeFromArray([1, 2, 3, 4], 3); should remove 3 and retunr [1,2,4]


function removeFromArray(a1, nums1){
    let emptyArr = [];
    for (i of a1) {
        if (i == nums1) {
            continue;
        }
        emptyArr.push(i);
    }

    return emptyArr;
}

console.log(removeFromArray([1, 2, 3, 4], 3));


//Exercise 05 - sumAll
//sumAll(1,4) returns the sum of 1 + 2 + 3 + 4 which is 10

function sumAll(numA, numB){
    let summa = 0;

    while (numA <= numB) {
        summa += numA;
        numA++;
    }

    return summa;

}

console.log(sumAll(1,4));

//Exercise 06 - Leap Years
//leapYears(2000) => is a leap year

function leapYears(year){
    if (year % 4 == 0) {
        return true;
        
    } else {
        if (year % 400 == 0){
            return true;
        }

        return false;
    }

}

console.log(leapYears(2000));
console.log(leapYears(1985));
console.log(leapYears(1600));


//Exercise 09 - Palindromes
function Palindromes(strA){
    if (strA.replace(/\s/g, '').replace(/[^\w\s]|_/g, '').toLowerCase() == reverseString(strA.replace(/\s/g, '').replace(/[^\w\s]|_/g, '').toLowerCase())) {
        return true;
    } else {
        return false;
    }
    
}

console.log(Palindromes('ZZZZ car, a man, a maracaz.'));
console.log(Palindromes('tacos'));
console.log(Palindromes('Racecar!'));
console.log(Palindromes('A car, a man, a maraca.'));
console.log(Palindromes('Animal loots foliated detail of stool lamina.'));

console.log("end of exercise 9");


//Exercise 10 - Fibonnaci
//this is not a summation of fibonnaci rather to find the next number

function fibonacci(nums){
    let i = 0;
    let prev = 0;
    let next = 1;
    while (i < (nums - 1)) {
        const temp = next;
        next = prev + next;
        prev = temp;  
        i++;
        
    }

    return (next);
    
}

console.log(fibonacci(4));
console.log(fibonacci(6));


//Exercise 11 - Get the Titles
const books = [
    {
      title: 'Book',
      author: 'Name'
    },
    {
      title: 'Book2',
      author: 'Name2'
    }
  ]



function getTheTitles(book){
    let emptyArr = [];
    for (let i = 0; i < book.length; i++) {
        emptyArr.push(book[i].title);
        
    }
    return emptyArr;

}

console.log(getTheTitles(books));

const people = [
    {
      name: "Carly",
      yearOfBirth: 1942,
      yearOfDeath: 1970,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]

  

  function findOldest(peps){
    let emptyArr = [];
    for (let i = 0; i < peps.length; i++) {
        console.log(peps[i].yearOfDeath - peps[i].yearOfBirth);
        emptyArr.push((peps[i].yearOfDeath - peps[i].yearOfBirth));
        
    }
    const max = Math.max(emptyArr);

    const result = peps.filter(person => (peps.yearOfDeath - peps.yearOfBirth) == max);

    return emptyArr;

  }
  console.log(people);