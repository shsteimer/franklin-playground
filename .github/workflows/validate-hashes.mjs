import { sync } from 'md5-file';

const aemJsMd5 = sync('./scripts/aem.js');
const aemJsMd5Expected = '35b0efe68ae58222124a60a4e5b4e397';
if (aemJsMd5 !== aemJsMd5Expected) {
  console.log(`aem.js has an unexpected md5 hash: ${aemJsMd5}. Please take care when updating this file.`);
  process.exit(1);
}

process.exit(0);