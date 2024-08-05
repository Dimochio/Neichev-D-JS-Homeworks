// За допомогою запиту вивести виджет погоди. Ресурс API https://openweathermap.org/current

// Також потрібно додати кнопку оновлення данних.

const widgetEl = document.getElementById("weather_widget");
const apiKey = "187df07db8ef7508f54d57787c960efc";
const city = "Kyiv";

async function fetchWeather() {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
  );
  const data = await response.json();
  return data;
}

function getLocaltime() {
  return new Date().toLocaleTimeString();
}

function updateWeather() {
  fetchWeather()
    .then((data) => {
      widgetEl.innerHTML = `
      <div class="weather-widget">
          <div class="top-section">
            <div class="location">
              <h2>${data.name}</h2>
              <p>${data.weather[0].description}</p>
            </div>            
            <div class="refresh">
              <button onClick="updateWeather()"><i class="bi bi-arrow-counterclockwise"></i></button>
              <span>Last refresh ${getLocaltime()}</span>
            </div>
          </div>
          <div class="bottom-section">
            <p>${data.main.temp}°C</p>
            <span>Feels like: ${data.main.feels_like}°C</span> 
            <span>Pressure: ${data.main.pressure}md</span> 
            <span>Wind speed: ${data.wind.speed}m/s</span> 
          </div>
      </div>
    `;
    })
    .catch((error) => {
      console.error(error);
      alert("Failed to fetch weather data.");
    });
}

updateWeather();
