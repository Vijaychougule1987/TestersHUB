const { Before, After } = require('@cucumber/cucumber');
const { chromium } = require('playwright');

Before(async function () {
    this.browser = await chromium.launch({ headless: false });  // Launching the browser
    this.context = await this.browser.newContext(); // Creating a new context
    this.page = await this.context.newPage(); // Creating a new page
  });
  
  After(async function () {
    await this.page.close();  // Closing the page
    await this.browser.close();  // Closing the browser after the test
  });