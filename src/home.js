import * as weather from './weather';

const onSubmit = (e) => {
  e.preventDefault();
  const city = document.querySelector('#city').value;
  const data = weather.getWeather(city);
  const report = weather.getInfo(data);
  report.then((value) => {
    createReport(value.getReport());
  })
}

const createTemp = (temperature) => {
  const temp = document.createElement('span');
  temp.textContent = temperature;
  const sup = document.createElement('sup');
  sup.textContent = 'o';
  const c = document.createElement('span');
  c.textContent = 'C';
  const text = document.createElement('p');
  text.appendChild(temp);
  text.appendChild(sup);
  text.appendChild(c);
  text.classList.add('temp');
  return text
}

const createReport = (report) => {
  const [name, country, desc, temp, humidity, speed, icon] = report
  const weather = document.querySelector('.weather');
  weather.innerHTML = '';

  const nameContainer = document.createElement('div');
  const nameDiv = document.createElement('div');
  nameDiv.textContent = name;
  nameDiv.classList.add('m-right-10', 'name')
  const countryDiv = document.createElement('div');
  countryDiv.textContent = country
  countryDiv.classList.add('country');
  nameContainer.appendChild(nameDiv);
  nameContainer.appendChild(countryDiv);
  nameContainer.classList.add('flex', 'center');

  const tempDiv = document.createElement('div');
  const text = createTemp(temp);
  tempDiv.appendChild(text);

  const detailsContainer = document.createElement('div');
  detailsContainer.classList.add('flex', 'center');

  const iconDiv = document.createElement('div');
  const weatherIcon = document.createElement('img');
  weatherIcon.src = `http://openweathermap.org/img/w/${icon}.png`;
  weatherIcon.classList.add('weather-icon');
  iconDiv.appendChild(weatherIcon);
  detailsContainer.appendChild(iconDiv);

  const detailsDiv = document.createElement('div');
  detailsDiv.classList.add('flex', 'column', 'center', 'align-start')
  const descDiv = document.createElement('div');
  descDiv.classList.add('m-bot-10')
  let capitalized = desc.charAt(0).toUpperCase();
  capitalized = capitalized.concat(desc.slice(1));
  descDiv.textContent = capitalized;
  const humidityDiv = document.createElement('div');
  humidityDiv.classList.add('m-bot-10')
  humidityDiv.textContent = `Humidity: ${humidity}%`;
  const speedDiv = document.createElement('div');
  speedDiv.textContent = `Wind speed: ${speed} MPH`;
  detailsDiv.appendChild(descDiv);
  detailsDiv.appendChild(humidityDiv);
  detailsDiv.appendChild(speedDiv);
  detailsContainer.appendChild(detailsDiv);

  weather.appendChild(nameContainer);
  weather.appendChild(tempDiv);
  weather.appendChild(detailsContainer);
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
  submit.onclick = onSubmit.bind(this);
  form.appendChild(cityInput);
  form.appendChild(submit);
  return form;
}

export default createForm;