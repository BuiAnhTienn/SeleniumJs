const { assert } = require("chai");
const { Builder, Browser, By, until } = require("selenium-webdriver");

describe("Bộ 1", () => {
  let driver;
//   let driver = await new Builder().forBrowser(Browser.CHROME).build()
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
        let listRadio = await driver.findElements(By.xpath('//input[@name="optradio"]'))
        console.log('Số radio có là :',listRadio.length)
        for (let i = 0; i < listRadio.length; i++) {
            const element = listRadio[i];
            let value = await element.getAttribute("value");
            console.log('Radio :',value)
            
        }
        await driver.sleep(3000);
        let radioMale = await driver.findElement(By.xpath('//*[@id="easycont"]/div/div[2]/div[1]/div[2]/label[1]/input'))
        if (await radioMale.isSelected() ==  false) {
            console.log(radioMale ?'Chưa chọn':'Chưa chọn')
            await radioMale.click()
        }
        await driver.sleep(3000);
        let radioFemale = await driver.findElement(By.xpath('//*[@id="easycont"]/div/div[2]/div[1]/div[2]/label[1]/input'))
        if (await radioFemale.isSelected() ==  false) {
            console.log(radioFemale ?'Chưa chọn':'Chưa chọn')
        }
        await driver.sleep(3000);
        let buttoncheck = await driver.findElement(By.id('buttoncheck'))
        if (await buttoncheck.isDisplayed()== true) {
            await buttoncheck.click()
            console.log('Đã click')
            await driver.sleep(3000);
            let textButoncheck = await driver.findElement(By.xpath('//*[@id="easycont"]/div/div[2]/div[1]/div[2]/p[3]'))
            if (await textButoncheck.isDisplayed() == true) {
                console.log(textButoncheck? 'Đã hiển thị' : ' Chưa hiển thị')
            }
            let gettext = await textButoncheck.getText()
            assert.strictEqual(gettext,"Radio button 'Male' is checked")
            console.log(gettext)
        } else {
            console.log('Chưa click')
        }
    } catch (error) {
      console.error("Lỗi ở khối it ", error);
    }
  });
});
