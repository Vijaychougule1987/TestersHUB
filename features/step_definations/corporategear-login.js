const { Given, When, Then, Before, After } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const { chromium } = require('playwright');

// Step 1: Navigate to Corporate Gear website
Given('the user navigates to the Corporate Gear website', async function () {
    await this.page.goto('https://www.corporategear.com/');
  console.log(await this.page.title());
});

// Step 2: Click on the Login button
When('the user clicks on the "Login" button', async function () {
  this.element = await this.page.locator("//button[@title='Login' and contains(@class, 'text-primary-hover')]");
  await this.element.click();
});

// Step 3: Enter email and password
When('the user enters their email and password', async function () {
  await this.page.fill('input[name="email"]', 'cypresstest28@gmail.com');
  await this.page.fill('input[name="password"]', 'Test@123');
});

// Step 4: Click on the SIGN IN button
When('the user clicks on the "SIGN IN" button', async function () {
  this.signInButton = await this.page.locator('button:has-text("SIGN IN")');
  await this.signInButton.click();
});

// Step 5: Verify landing on the home page
Then('the user should be redirected to the landing home page', async function () {
  // Update the URL check
  await expect(this.page).toHaveURL("https://www.corporategear.com/");  
});

//Scenario 2 ------------------------------------------------------------------------------------

// Enter invalid email and password
When('the user enters an invalid email and password', async function () {
  await this.page.fill('input[name="email"]', 'cypresstest28+invalid@gmail.com');
  await this.page.fill('input[name="password"]', 'Invalid@123');
});


// Error message  
Then('an error message "Username and password invalid" should be displayed', async function () {
  const errorMessageLocator = this.page.locator('div.mb-4.text-center:has-text("User name and password invalid.")');
    
    // Wait for the error message to appear with a timeout of 10 seconds (10000 ms)
    await errorMessageLocator.waitFor({ timeout: 500000 });
    
    // Assert that the message is displayed
    const errorMessageText = await errorMessageLocator.textContent();
    if (!errorMessageText.includes("User name and password invalid.")) {
      throw new Error(`Expected error message, but found: ${errorMessageText}`);
    }
});
