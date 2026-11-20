import './style.css';
import { setupCounter } from './counter.js';

document.querySelector('#app').innerHTML = `
  <div>
    <h1>My Vite Project</h1>
    <div class="card">
      <button id="counter" type="button"></button>
      <p>Click the button to increase the count.</p>
    </div>
  </div>
`;

setupCounter(document.querySelector('#counter'));
