const puppeteer = require('puppeteer-core');
const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

async function main() {
  const browser = await puppeteer.launch({ executablePath: CHROME_PATH, headless: true });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  await page.goto('https://prospira-agency-iuzt.vercel.app/', { waitUntil: 'networkidle2' });

  // Let's get the exact HTML of the section and all styles
  const heroHTML = await page.evaluate(() => {
    return document.querySelector('section').outerHTML;
  });

  const fs = require('fs');
  fs.writeFileSync('original_hero_exact.html', heroHTML);
  console.log('Saved original_hero_exact.html');

  await browser.close();
}

main().catch(console.error);
