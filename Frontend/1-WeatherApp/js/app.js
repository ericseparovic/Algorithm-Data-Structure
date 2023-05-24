const btn = document.querySelector("#btn");

btn.addEventListener("click", getData);

async function getData() {
  const city = document.querySelector("#city").value;
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=84e521543abd93f42cdf9c29d14105a2`;
  try {
    const response = await fetch(URL);
    const result = await response.json();
    showWeather(result);
  } catch (error) {
    console.error(error);
  }
}

function showWeather(weather) {
  console.log(weather);
}
