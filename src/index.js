import './reset.css';
import './styles.css';
import createForm from './home';

const content = document.querySelector('.content');

const form = createForm();
content.appendChild(form);
