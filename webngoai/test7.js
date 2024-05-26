const { assert } = require("chai");
const { Builder, Browser, By, until } = require("selenium-webdriver");

describe("Bộ 1", () => {
  let driver;
  // let driver = await new Builder().forBrowser(Browser.CHROME).build()
  beforeEach(async () => {
    driver = await new Builder().forBrowser(Browser.CHROME).build();
    await driver.get(
      "https://demo.seleniumeasy.com/basic-radiobutton-demo.html"
    );
  });
  afterEach(async () => {
    await driver.quit();
  });
  it("test1", async () => {
    try {
      await driver.sleep(3000);
      let textRadio = await driver
        .findElement(By.xpath('//*[@id="easycont"]/div/div[2]/div[1]/div[1]'))
        .getText()
        .then(function (value) {
          return value;
        });
      assert.strictEqual(textRadio, "Radio Button Demo");
      if ((await textRadio) == "Radio Button Demo") {
        console.log(textRadio ? "Đã đúng" : "Chưa đúng");
      }
      console.log(textRadio);
      let radioMale = await driver.findElements(
        By.xpath('//input[@name = "optradio"]')
      );
      console.log("Số radio :", radioMale.length);
      //----------------------- đi sâu vào cái input @name của cái name chung sau đó dùng getAtribute để lấy cái value có tên khácc nhau ra

      let listradio = await driver.findElements(
        By.xpath('//input[@name="optradio"]')
      );
      for (let i = 0; i < listradio.length; i++) {
        const element = listradio[i];
        let value = await element.getAttribute("value");
        console.log(`Radio: ${value}`);
      }
    } catch (error) {
      console.error("Lỗi ở khối it ", error);
    }
  });
});
