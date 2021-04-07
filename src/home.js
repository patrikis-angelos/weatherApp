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

const createReport = (report) => {
  console.log(report);
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