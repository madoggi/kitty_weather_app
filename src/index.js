let now = new Date();

function formatDate(date) {
  let week = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let nowDay = week[now.getDay()];

  let nowHour = now.getHours();
  if (nowHour < 10) {
    nowHour = `0${nowHour}`;
  }

  let nowMinute = now.getMinutes();
  if (nowMinute < 10) {
    nowMinute = `0${nowMinute}`;
  }

  let formattedDate = `${nowDay} ${nowHour}:${nowMinute}`;
  return formattedDate;
}

let todayDate = document.querySelector(".day-time");
todayDate.innerHTML = formatDate(new Date());

////week 5 task 1
function weather(response) {
  document.querySelector(".city").innerHTML = response.data.name;
  document.querySelector(".temp").innerHTML = Math.round(
    response.data.main.temp
  );
}

function searchC(city) {
  let apiKey = "d464138be506c07bf313e0df76e1acc5";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(weather);
}

function submitH(event) {
  event.preventDefault();
  let city = document.querySelector("#search-text-input").value;
  searchC(city);
}

let form = document.querySelector(".sdfsdf");
form.addEventListener("submit", submitH);

/////week 5 task 2
function position(position) {
  let apiKeyy = "d464138be506c07bf313e0df76e1acc5";
  let unitss = "metric";
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let apiUrll = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKeyy}&units=${unitss}`;
  axios.get(apiUrll).then(weather);
}

function сurrLoc(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(position);
}

let curLocButt = document.querySelector("#current-location-button");
curLocButt.addEventListener("click", сurrLoc);
