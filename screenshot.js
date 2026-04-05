const puppeteer = require('puppeteer');

(async () => {
  const url = process.argv[2] || 'https://example.com';
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);
  await page.screenshot({ path: 'screenshot.png', fullPage: true });
  console.log('Screenshot saved to screenshot.png');
  await browser.close();
})();