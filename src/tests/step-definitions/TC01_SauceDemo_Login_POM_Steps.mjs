import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { browser, context, page } from "../support/setupTeardown.mjs";
import { expect } from "@playwright/test";
import Login_po from '../pages/login_page.mjs';
//import Login_Data_obj from '../data/login_data.json';
import Login_Data_obj from '../data/login_data.json' assert { type: 'json' };

// Set default timeout to 10 seconds (10000 milliseconds)
setDefaultTimeout(10000);

//step definitions

Given('A web browser is at the saucelabs login page', {timeout: 60000}, async function () {
  await page.goto(Login_Data_obj.SauceDemo_URL);
});

When('A user enters the username {string}, the password {string}, and clicks on the login button', async function (username, password) {
  const Login_po_obj = new Login_po(page);
  await Login_po_obj.login_enterUserID(Login_Data_obj.SauceDemo_Username);
  await Login_po_obj.login_enterPassword(Login_Data_obj.SauceDemo_Password);
  await Login_po_obj.login_clickLogin();
});

When('A user enters the wrong username {string}, the password {string}, and clicks on the login button', async function (username, password) {
  const Login_po_obj = new Login_po(page);
  await Login_po_obj.login_enterUserID(Login_Data_obj.SauceDemo_Wrong_Username);
  await Login_po_obj.login_enterPassword(Login_Data_obj.SauceDemo_Password);
  await Login_po_obj.login_clickLogin();
});

When('A user enters the username {string}, the wrong password {string}, and clicks on the login button', async function (username, password) {
  const Login_po_obj = new Login_po(page);
  await Login_po_obj.login_enterUserID(Login_Data_obj.SauceDemo_Username);
  await Login_po_obj.login_enterPassword(Login_Data_obj.SauceDemo_Wrong_Password);
  await Login_po_obj.login_clickLogin();
});

Then('the url will contains the inventory subdirectory', async function () {
  await expect(page).toHaveURL(Login_Data_obj.SauceDemo_Redirect_URL);
});

Then('the login should fail with an error message', async function () {
  const Login_po_obj = new Login_po(page);
  await expect(await Login_po_obj.login_getErrorMessage()).toContain(Login_Data_obj.SauceDemo_Error_Message);
});


