import puppeteer from "puppeteer";

const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: { width: 1080, height: 1024 },
    slowMo: 150,
    userDataDir: 'temporary'
});
const page = await browser.newPage();
await page.goto('https://duckduckgo.com', { waitUntil: "networkidle2" });
await page.waitForSelector('input.searchbox_input__bEGm3');
await page.type('input.searchbox_input__bEGm3', 'codehiker07 github');
await page.waitForSelector('svg.iconButton_icon__Vr1u2.iconButton_size-20__O3lP5')
await page.click('svg.iconButton_icon__Vr1u2.iconButton_size-20__O3lP5');
await page.waitForSelector('span.EKtkFWMYpwzMKOYr0GYm.LQVY1Jpkk8nyJ6HBWKAk')
await page.click('span.EKtkFWMYpwzMKOYr0GYm.LQVY1Jpkk8nyJ6HBWKAk');
await page.waitForSelector('[data-tab-item="repositories"]')
await page.click('[data-tab-item="repositories"]');





// await browser.close();