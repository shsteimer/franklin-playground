// eslint-disable-next-line import/no-cycle
import { sampleRUM, loadScript } from './aem.js';

// Core Web Vitals RUM collection
sampleRUM('cwv');

// add more delayed functionality here
const loadTBT = async () => {
  const jq = loadScript('https://code.jquery.com/jquery-2.2.4.js');
  const react = loadScript('https://unpkg.com/react@18/umd/react.development.js');
  const reactDom = loadScript('https://unpkg.com/react-dom@18/umd/react-dom.development.js');
  await Promise.all([jq, react, reactDom]);
  const h1 = document.querySelector('h1');
  h1.textContent += ' : tbt scripts loaded!';
};
loadTBT();
