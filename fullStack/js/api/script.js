// do not forget to delete it
const key = "";
const city = "Jakarta";
const URL = `http://api.weatherapi.com/v1/current.json?key=${key}&q=${city}`;

fetch(URL)
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log(error);
  });

fetch("https://api.giphy.com/v1/gifs/translate?api_key=2&s=cats", {
  mode: "cors",
})
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log(error);
  });
