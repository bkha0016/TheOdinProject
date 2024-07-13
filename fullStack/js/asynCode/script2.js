let p = new Promise((resolve, reject) => {
  let a = 1 + 2;
  if (a === 2) {
    resolve("Success");
  } else {
    reject("Failed");
  }
});

p.then((message) => {
  console.log("This is in the then " + message);
}).catch((message) => {
  console.log("This is in the catch " + message);
});

const userLeft = false;
const userWatchingCatMeme = false;

function watchTutorialPromise() {
  return new Promise((resolve, reject) => {
    if (userLeft) {
      reject({
        name: "User Left",
        message: ":(",
      });
    } else if (userWatchingCatMeme) {
      reject({
        name: "User Watching Cat Meme",
        message: "WebDevSimplified < Cat",
      });
    } else {
      resolve("Thumbs up and Subscribe");
    }
  });
}

watchTutorialPromise()
  .then((messsage) => {
    console.log("Success: " + message);
  })
  .catch((error) => {
    console.log(error.name + " " + error.message);
  });

const recordVideoOne = new Promise((resolve, reject) => {
  resolve("Video 1 Recorded");
});

const recordVideotwo = new Promise((resolve, reject) => {
  resolve("Video 2 Recorded");
});

const recordVideoThree = new Promise((resolve, reject) => {
  resolve("Video 3 Recorded");
});

Promise.all([recordVideoOne, recordVideotwo, recordVideoThree]).then(
  (messages) => {
    console.log(messages);
  }
);
