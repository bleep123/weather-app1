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
  document.querySelector("#city-name").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML = Math.round(response.data.main.temp);

  let dateTime = document.querySelector("#date-time");
  if (minutes < 10) {
    dateTime.innerHTML = ` ${daysArray[day]} ${hours}:0${minutes}`;
  }
    dateTime.innerHTML = ` ${daysArray[day]} ${hours}:${minutes}`;
}

function submitForm(event) {
  event.preventDefault();
  let apiKey = "5a662a43a108de0bc455889e9f2204f1";
  let city = document.querySelector("#name").value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(display);
}

let search = document.querySelector("#search");
search.addEventListener("submit", submitForm);
