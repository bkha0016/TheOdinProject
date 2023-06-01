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



