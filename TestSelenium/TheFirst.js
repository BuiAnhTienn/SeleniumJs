const { Builder, Browser, By, Key, until } = require("selenium-webdriver");
const { elementLocated } = require("selenium-webdriver/lib/until");
var should = require("chai").should();
describe("Test1", () => {
  it("Login pass", async () => {
    let driver = await new Builder().forBrowser(Browser.CHROME).build();

    await driver.get("https://staging-clinic.gpet.com.vn/Login");

    try {
      await driver.wait(elementLocated(By.id("normal_login_email")), 5000);
      await driver
        .findElement(By.id("normal_login_email"))
        .sendKeys("tientien123@gpet.vn");


      await driver
        .findElement(By.xpath('//*[@id="normal_login_password"]/input'))
        .sendKeys("hongvien");
        await driver.sleep(5000);
      let buttonLogin = await driver
        .findElement(
          By.xpath('//*[@id="normal_login"]/div[5]/div/div/div/div/button')
        )
        .isEnabled();
      if (buttonLogin == true) {
        await driver
          .findElement(
            By.xpath('//*[@id="normal_login"]/div[5]/div/div/div/div/button')
          )
          .click();
      } else {
        console.log("Chưa được");
      }
      await driver.sleep(5000);
      let clinic = await driver.findElement(By.xpath('//header/div[1]/button[1]')).isDisplayed();
      if (clinic == true) {
        console.log('Đã login vào Page')
      } else {
        console.log('Chưa vào Page')
      }
    } finally {
      await driver.quit();
    }
  });
});
