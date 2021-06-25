const puppeteer = require('puppeteer');

(async() => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://suap.ifrn.edu.br/');
    await page.type('[name="username"]', '3231225');
    await page.waitForTimeout(2000);
    await page.type('[name="password"]', 'Hulkdeterno26#');
    await page.waitForTimeout(3542);
    await page.click('[class="btn success"]');
    await page.screenshot({ path: 'printSuap.png' });

    await browser.close();
})();