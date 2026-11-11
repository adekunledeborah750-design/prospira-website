const puppeteer = require('puppeteer-core');
const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

async function main() {
  const browser = await puppeteer.launch({ executablePath: CHROME_PATH, headless: true });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  await page.goto('https://prospira-agency-iuzt.vercel.app/', { waitUntil: 'networkidle2' });

  const heroDetails = await page.evaluate(() => {
    const hero = document.querySelector('section');
    const elements = [];
    const walk = (el, depth = 0) => {
      elements.push({
        depth,
        tag: el.tagName.toLowerCase(),
        classes: el.className,
        style: el.getAttribute('style'),
        textSnippet: el.childNodes.length === 1 && el.childNodes[0].nodeType === 3 ? el.textContent.trim().slice(0, 30) : null
      });
      for (const child of el.children) {
        walk(child, depth + 1);
      }
    };
    walk(hero);
    return elements;
  });

  console.log('Original Hero DOM Tree:');
  for (const el of heroDetails) {
    const indent = '  '.repeat(el.depth);
    console.log(`${indent}<${el.tag} class="${el.classes.slice(0, 50)}"${el.style ? ` style="${el.style}"` : ''}> ${el.textSnippet || ''}`);
  }

  await browser.close();
}

main().catch(console.error);
