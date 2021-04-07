const Weather = (name, country, desc, temp, humidity, speed, icon) => {
  const getTempC = () => Math.round(temp) - 272;
  const getTempF = () => Math.round(temp * 1.8 - 459.67);
  const getSpeed = () => (speed * 1.150779).toFixed(2);
  const getReport = (type) => {
    if (type === 'celsius') {
      return [name, country, desc, getTempC(), humidity, getSpeed(), icon];
    }
    return [name, country, desc, getTempF(), humidity, getSpeed(), icon];
  };

  return { getReport };
};

async function getWeather(city) {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${WeatherKey}`, { mode: 'cors' }); // eslint-disable-line
    if (response.ok) {
      return response.json();
    }
  } catch (error) {
    return null;
  }
}

async function getInfo(data) {
  try {
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
  } catch (error) {
    return null;
  }
}

export default getWeather;
export { getWeather, getInfo };