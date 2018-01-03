const puppeteer = require('puppeteer');
const devices = require('puppeteer/DeviceDescriptors');

(async() => {

const browser = await puppeteer.launch({
    headless: false,
});
const page = await browser.newPage();
await page.emulate(devices['iPhone 6']);
await page.goto('https://www.google.com');
await browser.close();

})();
