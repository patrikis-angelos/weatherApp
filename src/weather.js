const Weather = (name, country, desc, temp, humidity, speed) => {
  const getTemp = () => temp;

  const getReport = () => console.log(`${name} ${country} ${desc} ${temp} ${humidity} ${speed}`);

  return {getReport}
};

async function getWeather(city) {
const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weather_key}`, {mode: 'cors'})
return response.json();
}

async function getInfo(data) {
const info = await data;
const report = Weather(
  info.name,
  info.sys.country,
  info.weather[0].description,
  info.main.temp,
  info.main.humidity,
  info.wind.speed);
return report;
}

export default getWeather;
export {getWeather, getInfo};