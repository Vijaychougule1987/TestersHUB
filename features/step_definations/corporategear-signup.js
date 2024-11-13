const { Given, When, Then, Before, After } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const { chromium } = require('playwright');
const assert = require('assert');

let page;


// Given step: The user is on the "Sign Up" page
Given('The user is on the "Sign Up" page.', async function () {
  // Implement code to navigate to the 'Sign Up' page
  await this.page.goto('https://www.corporategear.com/CreateAccount/SignUp');
  console.log(await this.page.title());
});


// When step: The user clicks the "Sign Up" button
When('The user leaves all required fields empty and clicks "Sign Up" button.', async function () {
  // Implement code to click on the Sign Up button
  //await $('button:has-text("SIGN UP")').click();
  //const signInButton = page.locator('button:has-text("SIGN UP")');
  //await signInButton.click();

  this.signInButton = await this.page.locator('button:has-text("SIGN UP")');
  await this.signInButton.click();
  //console.log(`Clicking the ${button} button`);
});

Then('An error message "Enter your First Name." is displayed.', async function () {
    const errorMessageLocator = this.page.locator('p:has-text("Enter your First Name.")');
    
    // Wait for the error message to appear with a timeout of 10 seconds (10000 ms)
    await errorMessageLocator.waitFor({ timeout: 500000 });
    
    // Assert that the message is displayed
    const errorMessageText = await errorMessageLocator.textContent();
    if (!errorMessageText.includes("Enter your First Name.")) {
      throw new Error(`Expected error message, but found: ${errorMessageText}`);
    }
});

//Scenario 2 ------------------------------------------------------------------------------------

// When step: The user clicks the "Sign Up" button
When('The user enters an invalid email format and clicks "Sign Up"', async function () {
    await this.page.fill('//input[@placeholder="Enter Email Address"]', 'cypresstest');

    this.signInButton = await this.page.locator('button:has-text("SIGN UP")');
    await this.signInButton.click();
    //console.log(`Clicking the ${button} button`);
  });

Then('An error message "Email is not valid" is displayed.', { timeout: 10000 }, async function () {
    const errorMessageLocator = this.page.locator('p:has-text("Email is not valid.")');
    
    // Wait for the error message to appear with a timeout of 20 seconds (10000 ms)
    await errorMessageLocator.waitFor({ timeout: 20000 });
    
    // Assert that the message is displayed
    const errorMessageText = await errorMessageLocator.textContent();
    if (!errorMessageText.includes("Email is not valid.")) {
      throw new Error(`Expected error message, but found: ${errorMessageText}`);
    }
});



