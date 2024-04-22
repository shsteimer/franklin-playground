// eslint-disable-next-line import/no-cycle
import { sampleRUM, loadScript } from './aem.js';

// Core Web Vitals RUM collection
sampleRUM('cwv');

// add more delayed functionality here
loadScript('https://code.jquery.com/jquery-2.2.4.js').then(() => {
  const h1 = document.querySelector('h1');
  h1.textContent += ': JQ 2.2.4 loaded!';
});
