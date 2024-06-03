// utils/driverSetup.js
const { Builder, Browser } = require('selenium-webdriver');
// require('chromedriver'); // này làm nó đi chậm hơn

async function getDriver() {
    let driver = await new Builder().forBrowser(Browser.CHROME).build();
    return driver;
}

module.exports = { getDriver };
