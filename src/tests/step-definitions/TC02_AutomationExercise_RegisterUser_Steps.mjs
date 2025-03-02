import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { browser, context, page } from "../support/setupTeardown.mjs";

// Set default timeout to 10 seconds (10000 milliseconds)
setDefaultTimeout(10000);

//Step-definitions

Given('Navigate to url {string}', { timeout: 15000 }, async (url) => {
    await page.goto('https://www.automationexercise.com/');
});

Then('Verify that home page is visible successfully', async () => {
    await page.getByRole('link', { name: 'Website for automation' }).click();
});

When('Click on {string} button', async (button) => {
    await page.getByRole('link', { name: ' Signup / Login' }).click();
});

Then('Verify {string} is visible', async (text) => {
    await page.getByRole('heading', { name: 'New User Signup!' }).click();
});

When('Enter name and email address', async () => {
    await page.getByRole('textbox', { name: 'Name' }).fill('Playwright99');
    await page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address').fill('Playwright99@pw.com');
});

When('Fill details: Title, Name, Email, Password, Date of birth', async () => {
    await page.getByRole('radio', { name: 'Mr.' }).check();
    await page.getByRole('textbox', { name: 'Name *', exact: true }).click();
    await page.getByRole('textbox', { name: 'Name *', exact: true }).fill('Playwright999');
    await page.getByRole('textbox', { name: 'Password *' }).click();
    await page.getByRole('textbox', { name: 'Password *' }).fill('1234');
    await page.locator('#days').selectOption('10');
    await page.locator('#months').selectOption('9');
    await page.locator('#years').selectOption('2000');
});

When('Click {string}', async (button) => {
    await page.getByRole('button', { name: 'Signup' }).click();
});

Then('Verify that {string} is visible', async (text) => {
    await page.getByText('Account Created!').click();
});

When('Select checkbox {string}', async (checkbox) => {
    await page.getByRole('checkbox', { name: 'Sign up for our newsletter!' }).check();
    await page.getByRole('checkbox', { name: 'Receive special offers from' }).check();
});

When('Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number', async () => {

    await page.getByRole('textbox', { name: 'First name *' }).fill('Playwright');
    await page.getByRole('textbox', { name: 'Last name *' }).fill('999');
    await page.getByRole('textbox', { name: 'Company', exact: true }).fill('PW');
    await page.getByRole('textbox', { name: 'Address * (Street address, P.' }).fill('701, Houston, USA');
    await page.getByRole('textbox', { name: 'Address 2' }).fill('Sam ');
    await page.getByRole('textbox', { name: 'Address 2' }).fill('Sam Houston Pkwy');
    await page.getByLabel('Country *').selectOption('United States');
    await page.getByRole('textbox', { name: 'State *' }).fill('Texas');
    await page.getByRole('textbox', { name: 'City * Zipcode *' }).fill('Houston');
    await page.locator('#zipcode').fill('77042');
    await page.getByRole('textbox', { name: 'Mobile Number *' }).fill('7326480000');

});

When('Click {string} button', async (button) => {
    await page.getByRole('button', { name: button }).click();
});

When('Click the Continue button', { timeout: 15000 }, async () => {
    await page.getByRole('link', { name: 'Continue' }).click();
});

Then('Verify that the {string} is visible', async (text) => {
    await page.getByText('Enter Account Information').click();
});

Then('Verify that Logged in as username is visible', async () => {
    await page.getByText('Logged in as Playwright999').click();
});

When('Click Delete Account button', async () => {
    await page.getByRole('link', { name: ' Delete Account' }).click();
});

Then('Verify that ACCOUNT DELETED! is visible', async () => {
    await page.getByText('Account Deleted!').click();
});