function get(url) {
  // return a new promise
  return new Promise(function (resolve, reject) {
    // Do the usual XHR stuff
    var req = new XMLHttpRequest();
    req.open("GET", url);

    req.onload = function () {
      // This is called even on 404 etc
      // so check the status
      if (req.status === 200) {
        // Resolve the promise with the response text
        resolve(req.response);
      } else {
        // Otherwise reject with the status text
        // which will hopefully be a meaningful error
        reject(Error(req.statusText));
      }
    };

    // Handle network errors
    req.onerror = function () {
      reject(Error("Network Error"));
    };

    // Make the request
    req.send();
  });
}
/*
get("story.json").then(
  function (response) {
    console.log("Success!", response);
  },
  function (error) {
    console.error("Failed!", error);
  }
);
*/

new Promise(function (resolve, reject) {
  // A mock async action using setTimeout
  setTimeout(function () {
    resolve(10);
  }, 3000);
})
  .then(function (num) {
    console.log("first then: ", num);
    return num * 2;
  })
  .then(function (num) {
    console.log("second then: ", num);
    return num * 2;
  })
  .then(function (num) {
    console.log("last then: ", num);
  });

// The catch callback is executed when the promise is rejected
new Promise(function (resolve, reject) {
  // A mock async action using setTimeout
  setTimeout(function () {
    reject("Done!");
  }, 3000);
})
  .then(function (e) {
    console.log("done", e);
  })
  .catch(function (e) {
    console.log("catch: ", e);
  });

let myPromise = new Promise((resolve, reject) => {
  let success = true;
  setTimeout(() => {
    if (success) {
      resolve("The operation was successful!");
    } else {
      reject("The operation failed!");
    }
  }, 1000);
});

// Handling the resolve or rejected promise
myPromise
  .then((result) => {
    console.log(result); // Operation was successful!
  })
  .catch((error) => {
    console.log(error); // Operation Failed
  });

// Example with both 'resolve' and 'reject' conditions
let makeRequest = new Promise((resolve, reject) => {
  let success = Math.random() > 0.5; // Randomly succeed or fail

  setTimeout(() => {
    if (success) {
      resolve("Request succeeded!");
    } else {
      reject("Request failed!");
    }
  }, 5000);
});

makeRequest
  .then((result) => {
    console.log(result); // "Request succeeded!" (if success is true)
  })
  .catch((error) => {
    console.log(error); // "Request failed!" (if success is false)
  });

// Promise.all(iterable)
// This method takes an iterable of Promises and returns a single Promise that resolves when all of the input Promises have resolved or when any of them rejects
let promise1 = Promise.resolve(3);
let promise2 = 42;
let promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "foo");
});

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values); // [3, 42, "foo"]
});

// Promise.race(iterable)
// This method returns a promise that resolves or rejects as soon as one of the promieses in the iterable resolves or rejects, with the value or reason from that promise
let promiseA = new Promise((resolve, project) => {
  setTimeout(resolve, 500, "one");
});

let promiseB = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "two");
});

Promise.race([promise1, promise2]).then((value) => {
  console.log(value);
});

let promiseC = Promise.resolve("Success");
let promiseD = Promise.reject("Error");
let promiseE = Promise.resolve("Another success");

Promise.allSettled([promiseC, promiseD, promiseE]).then((results) => {
  results.forEach((result) => console.log(result.status));
});
