async function getWeather() {
  const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=Athens&appid=${window.weather_key}`, {mode: 'cors'})
  return response.json();
}


const s = getWeather();
s.then((response) => {
  console.log(response);
})