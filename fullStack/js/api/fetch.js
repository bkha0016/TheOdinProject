async function getData() {
  const url = "https://example.org/products.json";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.error(error.message);
  }
}
/*
fetch(url, options)
  .then((response) => {
    // handle the response
  })
  .catch((error) => {
    // handle errors
  });
* */
// a simple example to fetch data from a public API and log the result to the console
fetch("https://api.example.com/data")
  .then((response) => response.json()) //convert the response to JSON
  .then((data) => {
    console.log(data); // Handle the JSON data
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });

fetch("https://api.example.com/data", {
  method: "POST", // specify the HTTP method
  headers: {
    "Content-Type": "application/json", // set the content type to JSON
  },
  body: JSON.stringify({
    name: "John Doe",
    age: 30,
  }), // The body data must be a string
})
  .then((response) => response.json()) // convert the response to JSON
  .then((data) => {
    console.log("Success:", data); // Handle the JSON data
  })
  .catch((error) => {
    console.error("Error:", error);
  });
