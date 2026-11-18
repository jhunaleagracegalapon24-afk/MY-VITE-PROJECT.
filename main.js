import './style.css';
import heroImg from './assets/hero.png';
import javascriptLogo from './assets/javascript.svg';
import viteLogo from './assets/vite.svg';
import { setupCounter } from './counter.js';

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
  </div>
  <h1>Vite + JavaScript</h1>
  <div class="card">
    <button id="counter" type="button" class="counter"></button>
    <p>Click on the Vite logo to learn more</p>
  </div>
`;

setupCounter(document.querySelector('#counter'));
