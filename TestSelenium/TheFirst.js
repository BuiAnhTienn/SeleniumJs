const { Builder, Browser } = require("selenium-webdriver");

(async function exemple() {
  let driver = await new Builder().forBrowser(Browser.CHROME).build();

  beforeEach(async () => {
    await driver.get("https://demoqa.com/text-box");
  });

  afterEach(async () => {
    await driver.quit();
  });

  try {
  } finally {
  }
});
