import puppeteer from "puppeteer";



const browser = await puppeteer.launch({
    headless: false,
    slowMo: 100,
});
const page = await browser.newPage();
await page.goto('https://duckduckgo.com/', { waitUntil: "networkidle2" });
await page.waitForSelector('input.searchbox_input__bEGm3');
await page.type('input.searchbox_input__bEGm3', 'codehiker07 github');
await page.waitForSelector('svg.iconButton_icon__Vr1u2.iconButton_size-20__O3lP5')
await page.click('svg.iconButton_icon__Vr1u2.iconButton_size-20__O3lP5');
await page.waitForSelector('span.EKtkFWMYpwzMKOYr0GYm.LQVY1Jpkk8nyJ6HBWKAk')
await page.click('span.EKtkFWMYpwzMKOYr0GYm.LQVY1Jpkk8nyJ6HBWKAk');
await page.reload()
await page.screenshot({ path: 'scrape1.png', fullPage: true })
await browser.close();

