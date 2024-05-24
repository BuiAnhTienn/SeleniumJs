const { Builder, Browser, By, until } = require("selenium-webdriver");

describe("Bộ 1", () => {
  let driver;
  // let driver = await new Builder().forBrowser(Browser.CHROME).build()
  beforeEach(async () => {
    driver = await new Builder().forBrowser(Browser.CHROME).build();
    await driver.get("https://staging-clinic.gpet.com.vn/Login");
    await driver.sleep(3000)
    await driver
      .findElement(By.id("normal_login_email"))
      .sendKeys("tientien123@gpet.vn");
      await driver.sleep(3000)
    await driver
      .findElement(By.xpath('//*[@id="normal_login_password"]/input'))
      .sendKeys("hongvien");
  });
  afterEach(async () => {
    await driver.quit();
  });
  it("test1", async () => {
    try {
      await driver.sleep(3000)
      let buttonLogin = await driver.findElement(
        By.xpath('//*[@id="normal_login"]/div[5]/div/div/div/div/button')
      );
      if ((await buttonLogin.isEnabled()) == true) {
        await buttonLogin.click();
        console.log(' Đã click ')
      } else {
        console.log(" Chưa kích hoạt");
      }
      await driver.sleep(2000)
      let text = await driver.wait(until.titleIs('Phòng Của Tiến'),2000)
      console.log(text)
      await driver.sleep(2000)
      let hoverSubMenu = await driver.findElement(By.xpath('//*[@id="root"]/div/div/div[1]/div/ul'))
      await driver.actions().move({origin:hoverSubMenu}).perform()
      await driver.actions().scroll(0,0,0,300,hoverSubMenu).perform()
      await driver.sleep(2000)
      await driver.findElement(By.linkText('Sổ quỹ')).click()
      await driver.sleep(2000)
      //lấy số phần tử ra
      let thElements = await driver.findElements(By.css('th'));
      console.log(`Tổng số phần tử th: ${thElements.length}`);
      
      for (let i = 0; i < thElements.length; i++) {
        const element = thElements[i];
        let text = await element.getText();
        console.log(`Phần tử ${i + 1}: ${text}`);
      }
    } catch (error) {
      console.error('Lỗi ở khối it ',error)
    }
  });
});
