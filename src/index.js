import './reset.css';
import './styles.css';
import createForm from './home';

const content = document.querySelector('.content');
const weather = document.createElement('div');
weather.classList.add('weather');

const form = createForm();
content.appendChild(form);
content.appendChild(weather);
