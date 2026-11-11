const puppeteer = require('puppeteer-core');
const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

async function main() {
  const browser = await puppeteer.launch({ executablePath: CHROME_PATH, headless: true });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  console.log('Testing animation steps on local...');
  await page.goto('http://127.0.0.1:3000/', { waitUntil: 'domcontentloaded' });

  // Poll every 75ms for 1.5 seconds
  for (let i = 0; i <= 20; i++) {
    const time = i * 75;
    await new Promise(r => setTimeout(r, 75));
    const snapshot = await page.evaluate(() => {
      const leftCol = document.querySelector('section .text-left');
      const badge = leftCol ? leftCol.children[0] : null;
      const h1 = leftCol ? leftCol.children[1] : null;
      const p = leftCol ? leftCol.children[2] : null;
      const btns = leftCol ? leftCol.children[3] : null;
      const rightCol = document.querySelector('section .perspective-1000');
      const imgTilt = rightCol ? rightCol.firstElementChild : null;

      const getTransformAndOpacity = el => {
        if (!el) return null;
        const style = el.getAttribute('style') || '';
        const cs = window.getComputedStyle(el);
        return {
          opacity: cs.opacity,
          transform: cs.transform,
          inlineStyle: style
        };
      };

      return {
        badge: getTransformAndOpacity(badge),
        h1: getTransformAndOpacity(h1),
        p: getTransformAndOpacity(p),
        btns: getTransformAndOpacity(btns),
        rightCol: getTransformAndOpacity(rightCol),
        imgTilt: getTransformAndOpacity(imgTilt)
      };
    });

    console.log(`[t=${time}ms]`);
    console.log(`  badge: opacity=${snapshot.badge?.opacity}, inline="${snapshot.badge?.inlineStyle}"`);
    console.log(`  h1:    opacity=${snapshot.h1?.opacity}, inline="${snapshot.h1?.inlineStyle}"`);
    console.log(`  right: opacity=${snapshot.rightCol?.opacity}, inline="${snapshot.rightCol?.inlineStyle}"`);
  }

  await browser.close();
}

main().catch(console.error);
