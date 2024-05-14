const { Builder, Browser, By } = require("selenium-webdriver");

describe("Test 2", () => {
  let driver;
  beforeEach(async () => {
    try {
      driver = await new Builder().forBrowser(Browser.CHROME).build();
      await driver.get("https://staging-clinic.gpet.com.vn");
      await driver.sleep(3000);
      await driver
        .findElement(By.id("normal_login_email"))
        .sendKeys("tientien123@gpet.vn");
      await driver
        .findElement(By.xpath('//*[@id="normal_login_password"]/input'))
        .sendKeys("hongvien");
    } catch (error) {
      console.error("Có lỗi khi setup", error);
    }
  });

  afterEach(async () => {
    try {
      await driver.quit();
    } catch (error) {
      console.error("Có lỗi khi thoát", error);
    }
  });
  // ĐÂY SÀI CÁCH VIẾT MỚI
  it("Loggin pass 2", async () => {
    const buttonLogin = await driver.findElement(
      By.xpath('//*[@id="normal_login"]/div[5]/div/div/div/div/button')
    );
    if (await buttonLogin.isDisplayed() == true) {
      await buttonLogin.click();
      console.log("Nhấp vào nút Đăng nhập thành công.");
    } else {
      console.log("Nút Login không nhấn được nèeee!");
    }
    await driver.sleep(5000);
  });

  // Ở ĐÂY SÀI DÁCH VIẾT CŨ
  // it("login pass 2", async () => {
  //   const buttonLogin = await driver.findElement(
  //     By.xpath('//*[@id="normal_login"]/div[5]/div/div/div/div/button')
  //   ).isDisplayed();
  //   if (await buttonLogin == true) {
  //     await driver
  //       .findElement(
  //         By.xpath('//*[@id="normal_login"]/div[5]/div/div/div/div/button')
  //       )
  //       .click();
  //     console.log("Nhấp vào nút Đăng nhập thành công.");
  //   } else {
  //     console.log("Nút Login không nhấn được nèeee!");
  //   }
  //   await driver.sleep(5000);
  // });
});
