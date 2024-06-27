// DEFINING A MODULE
// Module is created as a IIFE (immediately invoked function expression) with a function inside:
const someModule = (function() {})();


const documentMock = (() => ({
    querySelector: (selector) => ({
        innerHTML: null,
    }),

}))();

// Module with a private function inside (private methods can be seen only within said entity. Public ones can be accessed from the outside of given entity)
const Formatter = (function(doc) {
    // let timesRun = 0;
    const timesRun = [];
    
    const log = (message) => console.log(`[${Date.now()}] Logger: ${message}`);

    // Module can house not only functions, but arrays, objects, and primitives as well
    // const setTimesRun = () => {
    //     log("Setting times run");
    //     ++timesRun;
    // }


    // log treated as private can be accessed by whatever it returns
    const makeUppercase = (text) => {
        log("Making uppercase");
        timesRun.push(null);
        return text.toUpperCase();
    }

    // function that will write a message to our requested HTML element
    // we can also include to check whether DOM exists or not?
    const writeToDOM = (selector, message) => {
        doc.querySelector(selector).innerHTML = message;
    }

    return {
        makeUppercase,
        timesRun,
        writeToDOM,
    }
})(documentMock || document);


console.log(Formatter.makeUppercase("tomek"));
console.log(Formatter.makeUppercase("tomek"));
console.log(Formatter.makeUppercase("tomek"));
console.log(Formatter.timesRun.length);
// Formatter.writeToDOM("#target", "Hi there");