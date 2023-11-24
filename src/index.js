let now = new Date();
let apiKey = "c13bac6d24c6e5103fo0acf726t9f4da";
//let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${newCity}&key=${apiKey}&units=metric`;

let submitButtom = document.querySelector("#city-input");
submitButtom.addEventListener("click", newCity);

function newCity(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#search-input");
  let newCity = document.querySelector("#city");
  let city = cityInput.value;
  newCity.innerHTML = `${cityInput.value}`;
  axios
    .get(
      `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`
    )
    .then(getTemp);
}

function getTemp(response) {
  let description = response.data.condition.description;
  let humedity = response.data.temperature.humidity;
  let wind = response.data.wind.speed;
  let temperature = Math.round(response.data.temperature.current);
  let currentTemp = document.querySelector("#current-temperature-value");
  let currentDesc = document.querySelector("#current-desc");
  let currentHumedity = document.querySelector("#current-humedity");
  let currentWind = document.querySelector("#current-wind");
  currentTemp.innerHTML = temperature;
  currentDesc.innerHTML = description;
  currentHumedity.innerHTML = humedity;
  currentWind.innerHTML = wind;
}
