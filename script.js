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
  "Saturday",
  
];

let dateTime = document.querySelector("#date-time");
dateTime.innerHTML = `29 degree celsius<br> ${daysArray[day]} ${hours}:${minutes}`;


function display(response){
  document.querySelector("#city-name").innerHTML=response.data.name;
  document.querySelector("#temperature").innerHTML=Math.round(response.data.main.temp);
}


function submitForm(event) {
event.preventDefault();
let city = document.querySelector("#city-name").value;
let apiKey="5a662a43a108de0bc455889e9f2204f1";
let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric`;
axios.get(`${apiUrl}&appid=${apiKey}`).then(display);
console.log(apiUrl);
}

let search = document.querySelector("#search");
search.addEventListener("submit", submitForm);
