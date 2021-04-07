import './reset.css';
import './styles.css';
import createForm from './home';

const content = document.querySelector('.content');
const weather = document.createElement('div');
weather.classList.add('weather');

const err = document.createElement('div');
err.classList.add('error');
err.id = 'error';

const form = createForm();
content.appendChild(err);
content.appendChild(form);
content.appendChild(weather);
