let now = new Date();
let day = now.getDay();
let hours = now.getHours();
let minutes = now.getMinutes();

let daysArray = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

function display(response) {
  console.log(response.data)
  document.querySelector("#city-name").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML = Math.round(response.data.main.temp);
  document.querySelector("#weather-description").innerHTML = response.data.weather[0].description;
  document.querySelector("#wind-speed").innerHTML = response.data.wind.speed;

  celsiusTemperature = response.data.main.temp;

  let dateTime = document.querySelector("#date-time");
  if (minutes < 10) {
    dateTime.innerHTML = ` ${daysArray[day]} ${hours}:0${minutes}`;
  }
    dateTime.innerHTML = ` ${daysArray[day]} ${hours}:${minutes}`;

  let iconElement= document.querySelector("#icon");
  iconElement.setAttribute("src", `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`)
}

function submitForm(event) {
  event.preventDefault();
  let apiKey = "5a662a43a108de0bc455889e9f2204f1";
  let city = document.querySelector("#name").value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(display);
}

function displayFahrenheit(event) {
  event.preventDefault();
  let fahrenheitTemperature = (celsiusTemperature * 9) / 5 + 32;
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = Math.round(fahrenheitTemperature);
}

function displayCelsius(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = Math.round(celsiusTemperature);
}

let search = document.querySelector("#search");
search.addEventListener("submit", submitForm);

let celsiusTemperature = null;

let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", displayFahrenheit);

let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", displayCelsius);