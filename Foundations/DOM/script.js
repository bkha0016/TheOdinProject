// selects the #container div 
const container = document.querySelector("#container");

// selects the first child of #container => .display
console.dir(container.firstElementChild);

// selects the .controls div
const control = document.querySelector(".controls");

// selects the previous child of .controls => .display
console.dir(control.previousElementSibling);

// Element creation - creates a new element of tag type tagName
const div = document.createElement("div");

// Adding inline style
// adds the indicated style rule to the element in the div variable
div.style.colro = "blue";

//adds several style rules
div.style.cssText = "color: blue; background: white;";

// adds several style rules
div.setAttribute("style", "color: blue; background: white;");

// if id exists, update it to "theDiv", else creates an id with value 'theDiv'
div.setAttribute("id", "theDiv");

// returns the value of specified attribute, in this case "theDiv"
div.getAttribute("id");

// removes specified attribute
div.removeAttribute("id");

// adds class "new" to your new div
div.classList.add("new");

// removes "new" class from div
div.classList.remove("new");

// if div doesnt have class "active" then add it, or if it does, then removes it
div.classList.toggle("active");

// creates a text node containing "Hello World!" and insets it in div
div.textContent = "Hello World!";

// renders the HTML inside div --> VERY RISKY AND NOT SAFE DUE TO POTENTIAL SECURITY RISK
div.innerHTML = "<span>Hello World!</span>"




