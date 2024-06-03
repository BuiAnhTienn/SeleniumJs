const { Builder, Browser, By, until } = require("selenium-webdriver");

describe("Bộ 1", () => {
  let driver;
  // let driver = await new Builder().forBrowser(Browser.CHROME).build()
  beforeEach(async () => {
    driver = await new Builder().forBrowser(Browser.CHROME).build();
    await driver.get("https://demo.seleniumeasy.com/basic-checkbox-demo.html");
  });
  afterEach(async () => {
    await driver.quit();
  });
  it("test1", async () => {
    try {
      let singleCheckbox = await driver.findElement(By.id("isAgeSelected"));
      if ((await singleCheckbox.isSelected()) == false) {
        await singleCheckbox.click();
        console.log(singleCheckbox ? "Chưa lick" : "Đã click");
      }
      let textSingle = await driver.findElement(By.id("txtAge"));
      let getTextSingle = await textSingle.getText();
      if ((await textSingle.isDisplayed()) == true) {
        console.log("Đây là text sau khi click :", getTextSingle);
      } else {
        console.log("Không phải text đó");
      }
      await driver.sleep(3000);
      let multipleCheckbox = await driver.findElements(
        By.className("cb1-element")
      );
      console.log("Số lượng checkbox :", multipleCheckbox.length);

      for (let i = 0; i < multipleCheckbox.length; i++) {
        const element = multipleCheckbox[i];

        if ((await element.isSelected()) == false) {
          console.log("Checkbox chưa check là số :", i + 1);
        } else {
          console.log("Checkbox đã check là số :", i + 1);
        }
      }
      await driver.sleep(3000);
      let butonCheckall = await driver.findElement(By.id("check1"));
      if ((await butonCheckall.getAttribute("value")) === "Check All") {
        await butonCheckall.click();
      } else {
        console.log("Nó là UncheckAll");
      }
      await driver.sleep(3000);
      for (let i = 0; i < multipleCheckbox.length; i++) {
        const element = multipleCheckbox[i];
        if ((await element.isSelected()) == true) {
          console.log(element ?`Checkbox đã check là số: ${i + 1}` : `Checkbox chưa check là số: ${i + 1}`);
        }
      }
      await driver.sleep(3000);
      let buttonUncheck = await driver.findElement(By.id("check1"));
      if ((await buttonUncheck.getAttribute("value")) === "Uncheck All") {
        console.log("Nó là Uncheckall");
      } else {
        console.log("Nó là Checkall");
      }
    } catch (error) {
      console.error("Lỗi ở khối it ", error);
    }
  });
});
