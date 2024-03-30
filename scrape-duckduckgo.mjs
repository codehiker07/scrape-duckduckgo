import puppeteer from "puppeteer";


(async () => {
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
    await page.waitForSelector('.wLL07_0Xnd1QZpzpfR4W #r1-0')
    await page.click('.wLL07_0Xnd1QZpzpfR4W #r1-0');
    await page.waitForSelector('.Link__StyledLink-sc-14289xe-0.XuJeD')
    await page.screenshot({ path: 'scrape1.png' })
    await browser.close();
})();
