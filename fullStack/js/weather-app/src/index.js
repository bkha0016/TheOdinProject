import "./styles.css";

document
  .getElementById("locationForm")
  .addEventListener("submit", async function (event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way
    const location = document.getElementById("location").value; // Get the value of the input field
    displayLoading(true);
    const weatherData = await getWeather(location); // Fetch the weather data
    displayLoading(false);
    if (weatherData) {
      displayWeather(weatherData); // Log the final weather data
    } else {
      displayError(); // Display an error message
    }
  });

async function getWeather(location) {
  const apiKey = "W2AHNQFMBLDPD6CYZE9ET4XGP";
  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&key=${apiKey}&contentType=json`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }
    const data = await response.json();
    console.log("Processed Weather Data:", processWeatherData(data));
    return processWeatherData(data);
  } catch (error) {
    console.error("Failed to fetch weather data:", error);
    return null;
  }
}

function processWeatherData(data) {
  return {
    location: data.address,
    description: data.description,
    currentTemperature: data.days[0].temp,
    humidity: data.days[0].humidity,
    conditions: data.days[0].conditions,
    daily: data.days.map((day) => ({
      date: day.datetime,
      tempMax: day.tempmax,
      tempMin: day.tempmin,
      conditions: day.conditions,
      icon: day.icon,
    })),
  };
}

function displayWeather(weatherData) {
  document.getElementById("locationName").textContent = weatherData.location;
  document.getElementById("description").textContent = weatherData.description;
  document.getElementById("currentTemp").textContent =
    weatherData.currentTemperature;
  document.getElementById("humidity").textContent = weatherData.humidity;
  document.getElementById("conditions").textContent = weatherData.conditions;
  document.getElementById("weatherInfo").style.display = "block";

  const dailyForecastContainer = document.getElementById("dailyForecast");
  dailyForecastContainer.innerHTML = ""; // Clear previous daily forcast data
  weatherData.daily.forEach((day) => {
    const dailyForecastElement = document.createElement("div");
    dailyForecastElement.classList.add("daily-forecast");
    dailyForecastElement.innerHTML = `
            <p><strong>Date:</strong> ${new Date(
              day.date
            ).toLocaleDateString()}</p>
            <p><strong>Max Temperature:</strong> ${day.tempMax}°C</p>
            <p><strong>Min Temperature:</strong> ${day.tempMin}°C</p>
            <p><strong>Conditions:</strong> ${day.conditions}</p>
        `;
    dailyForecastContainer.appendChild(dailyForecastElement);
  });
}

function displayLoading(isLoading) {
  const loadingElement = document.getElementById("loading");
  loadingElement.style.display = isLoading ? "block" : "none";
}

function displayError() {
  document.getElementById("weatherInfo").style.display = "none";
  alert("Failed to retrieve weather data. Please try again.");
}
