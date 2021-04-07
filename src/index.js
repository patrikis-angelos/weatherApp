import './reset.css';
import './styles.css';

const content = document.querySelector('.content');

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

const createForm = () => {
  const form = document.createElement('form');
  form.classList.add('border', 'form', 'flex', 'space-between')
  const cityInput = document.createElement('input');
  cityInput.classList.add('no-border', 'input')
  cityInput.id = 'city';
  cityInput.type = 'text';
  cityInput.placeholder = 'Search city';
  const submit = document.createElement('button');
  submit.type = 'submit';
  submit.classList.add('submit','no-border', "fas", "fa-search");
  submit.onclick = (e) => {
    e.preventDefault();
    const data = getWeather(cityInput.value);
    const report = getInfo(data);
    report.then((value) => {
      value.getReport();
    })
  }
  form.appendChild(cityInput);
  form.appendChild(submit);
  return form;
}

const form = createForm();
content.appendChild(form);
