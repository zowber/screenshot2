import puppeteer from 'puppeteer';
import screens from './screens.mjs'

const screenshot = async (width) => {

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setViewport({ width: width, height: 768 });

    for (const screen of screens) {
        console.log('Capturing @' + width + 'px: ' + screen.name, screen.url);
        await page.goto(screen.url);
        await page.screenshot({ path: screen.name + ' - ' + width + '.png', fullPage: true });
        console.log("OK");
    };

    await browser.close();
    
};

screenshot(320);