const puppeteer = require('puppeteer-core');
const fs = require('fs');
const path = require('path');

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

async function main() {
  const browser = await puppeteer.launch({ executablePath: CHROME_PATH, headless: true });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  console.log('Navigating to original site...');
  await page.goto('https://prospira-agency-iuzt.vercel.app/', { waitUntil: 'domcontentloaded' });

  // Inspect the image element styles and size on original
  const origImageDetails = await page.evaluate(() => {
    const img = document.querySelector('section img');
    const container = img ? img.closest('div.relative.w-full.aspect-square') : null;
    const parentFlex = img ? img.parentElement : null;
    return {
      imgWidth: img ? img.offsetWidth : 0,
      imgHeight: img ? img.offsetHeight : 0,
      imgNaturalWidth: img ? img.naturalWidth : 0,
      imgNaturalHeight: img ? img.naturalHeight : 0,
      imgClasses: img ? img.className : '',
      imgStyle: img ? img.getAttribute('style') : '',
      imgComputedWidth: img ? window.getComputedStyle(img).width : '',
      imgComputedHeight: img ? window.getComputedStyle(img).height : '',
      imgComputedTransform: img ? window.getComputedStyle(img).transform : '',
      containerComputedWidth: container ? window.getComputedStyle(container).width : '',
      containerComputedHeight: container ? window.getComputedStyle(container).height : '',
      parentFlexClasses: parentFlex ? parentFlex.className : '',
    };
  });

  console.log('Original image details:', origImageDetails);

  // Now inspect local site image details
  const pageLocal = await browser.newPage();
  await pageLocal.setViewport({ width: 1440, height: 900 });
  await pageLocal.goto('http://127.0.0.1:3000/', { waitUntil: 'domcontentloaded' });

  const localImageDetails = await pageLocal.evaluate(() => {
    const img = document.querySelector('section img');
    const container = img ? img.closest('div.relative.w-full.aspect-square') : null;
    return {
      imgWidth: img ? img.offsetWidth : 0,
      imgHeight: img ? img.offsetHeight : 0,
      imgClasses: img ? img.className : '',
      imgStyle: img ? img.getAttribute('style') : '',
      imgComputedWidth: img ? window.getComputedStyle(img).width : '',
      imgComputedHeight: img ? window.getComputedStyle(img).height : '',
      containerComputedWidth: container ? window.getComputedStyle(container).width : '',
      containerComputedHeight: container ? window.getComputedStyle(container).height : '',
    };
  });

  console.log('Local image details:', localImageDetails);

  await browser.close();
}

main().catch(console.error);
