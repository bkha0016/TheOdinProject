            // element.querySelector(selector) returns a ref to the first match of selector
            // element.querySelectorAll(selectors) returns a nodelist containing ref to all of the matches of the selectors

            // selects the #container div
            const container = document.querySelector('#container');

            // selects the first child of #container => .display
            console.dir(container.firstElementChild);

            // selects the .controls div
            const controls = document.querySelector('.controls');

            // selects the prior siblings => .display
            console.dir(controls.previousElementSibling);

            // selects the last child of #container => .controls
            console.dir(container.lastElementChild);

            // element creation => document.createElement(tagName, [options])
            const div = document.createElement('div');

            // adds the indicated style rule
            div.style.color = 'blue';

            // adds several style rules
            div.style.cssText = 'color: blue; background: white;';

            // adds several style rules
            div.setAttribute('style', 'color:blue; background: white;');

            div.style.cssText = "background-color: white";

            // adding id & rename it
            div.setAttribute('id', 'theDiv');

            div.getAttribute('id');

            // removing the attribute of an specified id => div.removeAttribute('id');

            // adding class "new" class from div
            div.classList.add('new'); //removes => div.classList.remove('new');

            // creates a text node containing "Hello World!" and insert it in div
            div.textContent = "Hello World!";

            div.innerHTML = "<span>Hello World!</span>";

            

            const gallon = document.querySelector('#gallon');

            const content = document.createElement('div');

            // diff between ID and class => id only once but class can be multiple
            content.classList.add('content');
            content.textContent = 'This is the glorious text-content';

            gallon.appendChild(content);

            

            const beats = document.querySelector('#box');
            const parag = document.createElement('div');
            const heading = document.createElement('div');

            parag.innerHTML = "<p>Hey I'm red!</p>";
            heading.innerHTML = "<h3>I'm a blue h3!</h3>";

            parag.style.cssText = "color: red";
            heading.style.cssText = "color: blue";

            beats.appendChild(parag);
            beats.appendChild(heading);

            // div with black border + pink bg + elements inside

            const boxer = document.querySelector('#box');

            const contented = document.createElement('div');

            contented.setAttribute('style', 'border: 5px solid black; background: pink;');

            boxer.appendChild(contented);
            const h1 = document.createElement('h1');

            h1.textContent = "I'm in a div";
            contented.appendChild(h1);

            const aparag = document.createElement('p');
            aparag.textContent = "ME TOO!";

            contented.appendChild(aparag);

            const btn = document.querySelector("#btn");
            btn.onclick = () => alert("Hello World");
            /* 
            function alertFunction() {
                alert("Yay!");
            }

            method 2 => btn.onclick = alertFunction;

            method 3 => btn.addEventListener('click', alertFunction);
            
            */



            