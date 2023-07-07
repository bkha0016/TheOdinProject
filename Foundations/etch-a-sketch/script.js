// get the parent element
const boxContainer = document.getElementById("boxContainer");
const slider = document.getElementById("slider");
const incrementValue = document.getElementById("incrementValue");
const resetButton = document.getElementById("resetButton");
const colorPicker = document.getElementById("colorPicker");


slider.addEventListener("input", updateIncrement);
resetButton.addEventListener("click", reset);

function updateIncrement(){
    const sliderValue = parseInt(slider.value);
    let increment;
    
    switch (sliderValue) {
        case 1:
            increment = 4;
            break;
        case 2:
            increment = 16;
            break;
        case 3:
            increment = 32;
            break;
        case 4:
            increment = 64;
            break;
    }
    incrementValue.textContent = increment;

    // Clear old div content
    boxContainer.innerHTML = '';

    // Generate new div content
    for (let i = 0; i < increment; i++){
        const olderDiv = document.createElement('div');

        olderDiv.classList.add("older-div");

        

        for (let j = 0; j < increment; j++){
            const newDiv = document.createElement("div");

            newDiv.classList.add("new-div");

            newDiv.addEventListener("mouseover", handleMouseClick);

            olderDiv.appendChild(newDiv);

        };

        // Appending the older <div> to the parent element
        boxContainer.appendChild(olderDiv);
    };
};
//TODO: create a logic when the box is pressed then the color changes
// Create a logic when the box is pressed, the color changes
function handleMouseClick(event){
    const target = event.target;
    target.style.backgroundColor = colorPicker.value;
}

function reset(){
    const sliderValue = parseInt(slider.value);
    let increment;
    
    switch (sliderValue) {
        case 1:
            increment = 4;
            break;
        case 2:
            increment = 16;
            break;
        case 3:
            increment = 32;
            break;
        case 4:
            increment = 64;
            break;
    }
    incrementValue.textContent = increment;

    // Clear old div content
    boxContainer.innerHTML = '';

    // Generate new div content
    for (let i = 0; i < increment; i++){
        const olderDiv = document.createElement('div');

        olderDiv.classList.add("older-div");

        

        for (let j = 0; j < increment; j++){
            const newDiv = document.createElement("div");

            newDiv.classList.add("new-div");

            newDiv.addEventListener("mouseover", handleMouseClick);

            olderDiv.appendChild(newDiv);

        };

        // Appending the older <div> to the parent element
        boxContainer.appendChild(olderDiv);
    };


};

