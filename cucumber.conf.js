// cucumber.conf.js
/*const { setWorldConstructor, setDefaultTimeout } = require('@cucumber/cucumber');
const { chromium } = require('playwright');

class CustomWorld {
  async init() {
    this.browser = await chromium.launch({ headless: true });
  }

  async close() {
    await this.browser.close();
  }
}

setDefaultTimeout(60000);
setWorldConstructor(CustomWorld); */