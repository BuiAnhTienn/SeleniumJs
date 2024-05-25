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
      let text = await driver.wait(until.titleIs('Phòng Của Tiến'),3000)
      // console.log(text)
      // sử dụng toán tử 3 ngôi thay vì if và else
      console.log(text ? 'Đã vào đúng phòng' : 'Chưa vào đúng phòng');
      await driver.sleep(2000)
      let hoverSubMenu = await driver.findElement(By.xpath('//*[@id="root"]/div/div/div[1]/div/ul'))
      await driver.actions().move({origin:hoverSubMenu}).perform()
      await driver.actions().scroll(0,0,0,300,hoverSubMenu).perform()
      await driver.sleep(2000)
      await driver.findElement(By.linkText('Sổ quỹ')).click()
      await driver.sleep(2000)
      //lấy số phần tử
      let th = await driver.findElements(By.css('th'))
      console.log('Số lượng phần tử trong thẻ này là:',th.length)
      for (let i = 0; i < th.length; i++) {
        const element = th[i];
        let inTextTh = await element.getText()
        console.log(inTextTh)
      }
      let buttonPhieuthu = await driver.findElement(By.xpath('//*[@id="root"]/div/div/div[2]/div/div/div/div/div/div[1]/div[2]/div/button[1]'))
      let textPhieuthu = await buttonPhieuthu.getText()
      if (await textPhieuthu == 'Lập phiếu thu') {
        await buttonPhieuthu.click()
        console.log('Nó là lập phiếu thu')
      } else {
        console.log('Không phải lập phiếu thu')
      }
      await driver.sleep(2000)
      let checkbox = await driver.findElement(By.id('add_to_revenue'))
      if (await checkbox.isSelected() == true) {
        console.log(' đã hoạch toán')
      } else {
        console.log('chưa hoạch toán')
      }
    } catch (error) {
      console.error('Lỗi ở khối it ',error)
    }
  });
});
