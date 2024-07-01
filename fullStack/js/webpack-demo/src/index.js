// import your function
import _ from 'lodash';
import myName from './myName';
import './style.css';
import Icon from './icon.png';
import Data from './data.xml';
import Notes from './data.csv';
import printMe from './print.js';
import { cube } from './math.js';

if (process.env.NODE_ENV !== 'production') {
	console.log('Looks like we are in development mode!');
  }


function component() {
	const element = document.createElement("div");
	const btn = document.createElement('button');
	
	// Lodash, currently included via a script, is required for this line to work
	// Lodash, now imported by this script
	element.innerHTML = _.join(["Hello", "webpack"], " ");
	
	// use your function!
	//element.textContent = myName('Cody');
	
	element.classList.add('hello');

	// Add the image to our existing div.
	const myIcon = new Image();
	myIcon.src = Icon;

	element.appendChild(myIcon);

	btn.innerHTML = 'Click me and check the console!';
  	btn.onclick = printMe;

  	element.appendChild(btn);

	console.log(Data);
	console.log(Notes);


	return element;
}


document.body.appendChild(component());

