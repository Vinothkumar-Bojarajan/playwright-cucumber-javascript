import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { browser, context, page } from "../support/setupTeardown.mjs";

// Set default timeout to 10 seconds (10000 milliseconds)
setDefaultTimeout(10000);

//Step-definitions

Given('I navigate to {string}', { timeout: 60000 }, async function (url) {
    await page.goto(url);
});

When('I click on the link: Log in', async function () {
    await page.getByRole('link', { name: 'Log in' }).click();
});

When('I enter Username: Playwright99 and Password: Playwright99', async function () {
    await page.fill('#loginusername', 'Playwright99');
    await page.fill('#loginpassword', 'Playwright99');
});

When('I click on the button: Log in', async function () {
    await page.getByRole('button', { name: 'Log in' }).click();
});

Then('I should see the link: Welcome Playwright99', async function () {
    await page.getByRole('link', { name: 'Welcome Playwright99' }).click();
});

When('I click on the link: Laptops', async function () {
    await page.getByRole('link', { name: 'Laptops' }).click();
});

When('I click on the link: Sony vaio i5', async function () {
    await page.getByRole('link', { name: 'Sony vaio i5' }).click();
    page.once('dialog', dialog => {
        console.log(`Dialog message: ${dialog.message()}`);
        dialog.dismiss().catch(() => { });
    });
});

When('I click on the link: Add to cart', async function () {

    await page.getByRole('link', { name: 'Add to cart' }).click();
    page.once('dialog', dialog => {
        console.log(`Dialog message: ${dialog.message()}`);
        dialog.dismiss().catch(() => { });
    });
});

When('I handle the dialog by dismissing it', async function () {
    page.on('dialog', dialog => dialog.dismiss());
});

When('I click on the link: Cart', async function () {
    await page.getByRole('listitem').filter({ hasText: 'Cart' }).click();
});

When('I click on the button: Place Order', async function () {
    await page.getByRole('button', { name: 'Place Order' }).click();
});

When('I enter order details: Name: Playwright99, Country: United States, City: Houston, Credit card: 1234567890123456, Month: 09, Year: 2035', async function () {
    await page.getByRole('textbox', { name: 'Name:' }).fill('Playwright99');
    await page.getByRole('textbox', { name: 'Country:' }).fill('United States');
    await page.getByRole('textbox', { name: 'City:' }).fill('Houston');
    await page.getByRole('textbox', { name: 'Credit card:' }).fill('1234567890123456');
    await page.getByRole('textbox', { name: 'Month:' }).fill('09');
    await page.getByRole('textbox', { name: 'Year:' }).fill('2035');
});

When('I click on the button: Purchase', async function () {
    await page.getByRole('button', { name: 'Purchase' }).click();
});

Then('I should see the message: Thank you for your purchase!', async function () {
    await page.getByRole('heading', { name: 'Thank you for your purchase!' }).click();
});

When('I click on the button: OK', async function () {
    await page.getByRole('button', { name: 'OK' }).click();
});

When('I click on the link: PRODUCT STORE', async function () {
    await page.getByRole('link', { name: 'PRODUCT STORE' }).click();
});