export async function getWeatherLocation() {
  const inputCityEl = document.querySelector(".city");
  let cityName;
  let weather;

  if (!localStorage.getItem("city")) {
    getLocalPosition();
    console.log("root city");
  }

  saveCity();

  function saveCity() {
    inputCityEl.addEventListener("click", () => {
      function setLocalStorage() {
        localStorage.setItem("city", inputCityEl.value);
      }
      window.addEventListener("beforeunload", setLocalStorage);
    });

    function getLocalStorage() {
      if (localStorage.getItem("city")) {
        cityName = localStorage.getItem("city");
        inputCityEl.value = localStorage.getItem("city");
        console.log("input city");
        drawCity();
      }
    }
    window.addEventListener("load", getLocalStorage);
  }

  async function getLocalPosition() {
    const urlGeo = `https://get.geojs.io/v1/ip/geo.json`;
    const responseCity = await fetch(urlGeo);

    if (responseCity.ok) {
      const result = await responseCity.json();
      cityName = result.city;
      inputCityEl.value = cityName;
    } else {
      console.log("can't find city");
    }
    drawCity();
  }

  async function drawCity() {
    const apiKeyWeather = "7cdf666258bbacb5f659f23142a75931";
    const urlOpenWeather = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${cityName}&appid=${apiKeyWeather}`;

    const responseWeather = await fetch(urlOpenWeather);

    if (responseWeather.ok) {
      weather = await responseWeather.json();
    } else {
      alert("Please enter correct city's name, can't find the weather");
      console.log("can't find weather");
    }

    const weatherIconEl = document.querySelector(".weather-icon");
    const temperatureEl = document.querySelector(".temperature");
    const weatherDescriptionEl = document.querySelector(".weather-description");
    const weatherWindEl = document.querySelector(".wind__speed");
    const weatherHumidityEl = document.querySelector(".humidity__item");

    let lang = localStorage.getItem("lang");

    if (lang === "ru") {
      weatherIconEl.classList.add(`owf-${weather.weather[0].id}`);
      temperatureEl.textContent = `${weather.main.temp.toFixed(0)}°C`;
      //weatherDescriptionEl.textContent = weather.weather[0].description;
      weatherWindEl.textContent = `Скорость ветра:${weather.wind.speed} м/c`;
      weatherHumidityEl.textContent = `Влажность: ${weather.main.humidity}%`;
    } else {
      weatherIconEl.classList.add(`owf-${weather.weather[0].id}`);
      temperatureEl.textContent = `${weather.main.temp.toFixed(0)}°C`;
      weatherDescriptionEl.textContent = weather.weather[0].description;
      weatherWindEl.textContent = `Wind speed: ${weather.wind.speed} m/s`;
      weatherHumidityEl.textContent = `Humidity: ${weather.main.humidity}%`;
    }
  }
}
