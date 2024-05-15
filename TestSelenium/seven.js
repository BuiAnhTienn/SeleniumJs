const { Builder, Browser, By, until } = require("selenium-webdriver");

describe("Bộ 1", () => {
  let driver;
  before(async () => {
    try {
       driver = await new Builder().forBrowser(Browser.CHROME).build();
    } catch (error) {
      console.error("Lỗi khi khởi tạo chrome", error);
    }
  });
  beforeEach(async () => {
    try {
      await driver.get("https://staging-clinic.gpet.com.vn/Login");
      await driver.sleep(3000);
      await driver
        .findElement(By.id("normal_login_email"))
        .sendKeys("tientien123@gpet.vn");
      await driver
        .findElement(By.xpath('//*[@id="normal_login_password"]/input'))
        .sendKeys("hongvien");
    } catch (error) {
      console.error("Lỗi ở điều kiện befor", error);
    }
  });
  afterEach(async () => {
    try {
      await driver.quit();
    } catch (error) {
      console.error("Lỗi khi thoát", error);
    }
  });
  it("Test 1", async () => {
    try {
        await driver.sleep(3000)
      let buttonLogin = await driver.findElement(
        By.xpath('//*[@id="normal_login"]/div[5]/div/div/div/div/button')
      );
      if ((await buttonLogin.isEnabled()) == true) {
        await buttonLogin.click();
        console.log("Đã click button login !");
      } else {
        console.log("Chưa click!");
      }
      await driver.sleep(3000);
      let titlesPk = await driver.wait(until.titleIs("Phòng Của Tiến"));
      if (titlesPk == true) {
        console.log("Đã đúng titles vào đúng phòng");
      } else {
        console.log("Sai titels vào sai phòng");
      }
      await driver.sleep(3000);

      // cách viết cũ hover sau đó mới cuộn
    //   let hoverSubmenu = await driver.findElement(
    //     By.xpath('//*[@id="root"]/div/div/div[1]/div/ul')
    //   );
    //   await driver.actions().move({ origin: hoverSubmenu }).perform();
    //   await driver.sleep(3000);
    //   let scrollSebmenu = await driver.findElement(
    //     By.xpath('//*[@id="root"]/div/div/div[1]/div/ul/li[4]/div')
    //   );
    //   await driver.actions().scroll(0, 0, 0, 300, scrollSebmenu).perform();
    //   await driver.sleep(3000);

    // cách viết mới hover xong cuộn
    let hoverSubmenu = await driver.findElement(
        By.xpath('//*[@id="root"]/div/div/div[1]/div/ul')
      );
      await driver.actions().move({ origin: hoverSubmenu }).perform();
      await driver.actions().scroll(0, 0, 0, 300, hoverSubmenu).perform();
      await driver.sleep(3000);
  //------------------------------------------------------------------

      await driver.findElement(By.linkText("Sổ quỹ")).click();
      await driver.sleep(3000);
      let buttonPhieuthu = await driver.findElement(
        By.xpath(
          '//*[@id="root"]/div/div/div[2]/div/div/div/div/div/div[1]/div[2]/div/button[1]'
        )
      );
      if ((await buttonPhieuthu.isDisplayed()) == true) {
        await buttonPhieuthu.click();
      } else {
        console.log("Không thấy lập phiếu thu");
      }
      await driver.sleep(3000);
      let textphieuthu = await driver.findElement(By.xpath('//*[@id=":r1:"]'));
      if ((await textphieuthu.isDisplayed()) == true) {
        await textphieuthu.getText();
      } else {
        console.log("Chưa mở phiếu thu");
      }
      await driver.sleep(3000);
      let textTh = await driver.findElements(By.css("th"));
      for (let i = 0; i < textTh.length; i++) {
        const element = textTh[i];
        let text = await element.getText();
        console.log(text);
      }
      await driver.sleep(3000);
      let checkbox = await driver.findElement(
        By.xpath('//*[@id="add_to_revenue"]')
      );
      if ((await checkbox.isSelected()) == true) {
        console.log("Đã check");
      } else {
        console.log("Chưa check");
      }
    } catch (error) {
      console.error("Lỗi ở khối it : ",error);
    }
  });
});
