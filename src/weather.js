const Weather = (name, country, desc, temp, humidity, speed, icon) => {
  const getTempC = () => Math.round(temp) - 272;
  const getSpeed = () => (speed * 1.150779).toFixed(2);
  const getReport = () => [name, country, desc, getTempC(), humidity, getSpeed(), icon];

  return { getReport };
};

async function getWeather(city) {
  const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${WeatherKey}`, { mode: 'cors' }); // eslint-disable-line
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
    info.wind.speed,
    info.weather[0].icon,
  );
  return report;
}

export default getWeather;
export { getWeather, getInfo };