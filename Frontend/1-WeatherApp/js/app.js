const btn = document.querySelector("#btn");
const container = document.querySelector("#container");

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

function showWeather(data) {
  const { main, name, wind, weather } = data;
  const { temp, humidity } = main;
  const { speed } = wind;
  const { description } = weather[0];

  let html = `
  <section class="section__weather">
            <h2>${name}</h2>
            <img src="" alt="">
            <p>Temp: ${temp}</p>
            <p>Humidity: ${humidity}</p>
            <p>Speed: ${speed}</p>
            <p>Description: ${description}</p>
  </section> 
  `;

  console.log(wind);

  container.innerHTML = html;
}
