const { Builder, By, Browser } = require("selenium-webdriver");

describe("Handle CheckBox", () => {
  let driver;

  beforeEach(async () => {
    try {
      driver = await new Builder().forBrowser(Browser.CHROME).build();
      await driver.get("https://staging-clinic.gpet.com.vn");
      await driver.sleep(3000)
      await driver.findElement(By.id("normal_login_email")).sendKeys("tientien123@gpet.vn");
      await driver.findElement(By.xpath('//*[@id="normal_login_password"]/input')).sendKeys("hongvien");
    } catch (error) {
      console.error("Error during setup:", error);
    }
  });

  afterEach(async () => {
    try {
     
        await driver.quit();
      
    } catch (error) {
      console.error("Error during teardown:", error);
    }
  });

  it("Test", async () => {
    try {
        await driver.sleep(3000)
      let buttonLogin = await driver.findElement(By.xpath('//*[@id="normal_login"]/div[5]/div/div/div/div/button')).isEnabled();
      if (buttonLogin) {
        await driver.findElement(By.xpath('//*[@id="normal_login"]/div[5]/div/div/div/div/button')).click();
      } else {
        console.log("Nút Login không nhấn được!");
      }
    } catch (error) {
      console.error("Error during test:", error);
    }
  });
});
