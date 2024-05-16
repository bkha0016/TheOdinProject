const container = document.querySelector("#container");

const content = document.createElement("div");
// content.classList.add("content");
content.textContent = "This is the glorious text-content!";

// Create a <p> element with red text
const redParagraph = document.createElement('p');
redParagraph.textContent = "Hey I'm Red!";
redParagraph.classList.add('red-text');

// Create an <h3> element with blue text
const blueH3 = document.createElement("h3");
blueH3.textContent = "I'm a blue H3!";
blueH3.classList.add("blue-text");

// <h1> element that says "I'm in a div"
const textH1 = document.createElement("h1");
textH1.textContent = "I'm in a div";

// <p> element that says ME TOO!
const textP = document.createElement("p");
textP.textContent = 'ME TOO!';



// Create a <div> with a black border and pink background color
const div = document.createElement("div");
div.classList.add("styled-div");

// appending div, red p, and blue h3 into the container
container.append(content, redParagraph, blueH3);

// appending h1, p into the div element
div.append(textH1, textP);

// appending the div into the container
container.appendChild(div);

// Adding functionality to the button
const btn = document.querySelector("#btn");
btn.onclick = () => alert("Hello World");

// This method is way better than the previous method
const btn2 = document.querySelector("#btn2");
btn2.addEventListener("click", function (e){
    console.log(e.target);
    e.target.style.background = "blue";    
});

// buttons is a node list. It looks and acts much like an array
const buttons = document.querySelectorAll("button");

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
    // and for each one we add a "click" listener
    button.addEventListener("click", () => {
        alert(button.id);
    });
});



