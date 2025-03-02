import { Before, After, Status } from "@cucumber/cucumber";
import { chromium } from "@playwright/test";

let browser;
let context;
let page;

Before(async () => {
    browser = await chromium.launch({
        headless: false,
        slowMo: 500 // Adjust the speed here (milliseconds)
    });
    context = await browser.newContext({
        viewport: { width: 1500, height: 750 },
        ignoreHTTPSErrors: true, // Useful for testing on sites with self-signed certificates
    });
    page = await context.newPage();
});

After(async function (scenario) {
    if (scenario.result && scenario.result.status === Status.FAILED) {
        const screenshot = await page.screenshot({ path: `screenshots/${scenario.pickle.name}.png` });
        this.attach(screenshot, 'image/png');
    }
    await page.close();
    await context.close();
    await browser.close();
});

export { browser, context, page };