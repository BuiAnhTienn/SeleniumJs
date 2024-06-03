
const { assert } = require("chai");
const { Builder, Browser, By, until } = require("selenium-webdriver");

describe("Bộ 1", () => {
  let driver;
//   let driver = await new Builder().forBrowser(Browser.CHROME).build()
  beforeEach(async () => {
    driver = await new Builder().forBrowser(Browser.CHROME).build();
    await driver.get(
      "https://techydevs.com/demos/themes/html/listhub-demo/listhub/index.html"
    );
  });
  afterEach(async () => {
    await driver.quit();
  });
  it("test1", async () => {
    try {
        await driver.sleep(3000)
await driver.findElement(By.xpath('/html/body/section[1]/div[3]/div/div/div[2]/div[2]/div/a')).click()
await driver.sleep(3000)
await driver.findElement(By.xpath('/html/body/section[1]/div[3]/div/div/div[2]/div[2]/div/div/div/input')).sendKeys('Vietnam')
await driver.sleep(3000)
await driver.findElement(By.xpath('/html/body/section[1]/div[3]/div/div/div[2]/div[2]/div/div/ul/li')).click()
await driver.sleep(3000)

    } catch (error) {
      console.error("Lỗi ở khối it ", error);
    }
  });
});
