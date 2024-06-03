const { Builder, Browser, By } = require("selenium-webdriver");
const { elementLocated } = require("selenium-webdriver/lib/until");

describe("Test 2", () => {
  it("Loggin pass 2", async () => {
    let driver = await new Builder().forBrowser(Browser.CHROME).build();

    try {
      await driver.get("https://staging-clinic.gpet.com.vn");
      driver.manage().setTimeouts({ implicit: 5000 }); // Đặt timeout là 5000ms (5 giây) cho các thao tác tường minh
      await driver
        .findElement(By.id("normal_login_email"))
        .sendKeys("tientien123@gpet.vn");
      await driver
        .findElement(By.xpath('//*[@id="normal_login_password"]/input'))
        .sendKeys("hongvien");
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
        console.log("Nút Login không nhấn được nèeee!");
      }

      let titelPK = await driver
        .findElement(
          By.xpath('//*[@id="root"]/div/div/div[2]/header/div[1]/button[1]')
        )
        .isDisplayed();
      if (titelPK == true) {
        console.log("Đến trang Home rồi !");
      } else {
        console.log("Chưa đến trang Home!");
      }
      await driver.sleep(6000);

      // Tìm phần tử mà bạn muốn hover qua

      let elementToHover = await driver.findElement(
        By.xpath('//*[@id="root"]/div/div/div[1]/div/ul')
      );

      // Thực hiện hành động hover bằng cách sử dụng Actions của Selenium WebDriver
      await driver.actions().move({ origin: elementToHover }).perform();

     // await driver.executeScript("window.scrollBy(0, 300)");
     //Test scroll chuột pass
      const scrollpage = await driver.findElement(By.xpath('//*[@id="root"]/div/div/div[1]/div/ul'))

      await driver.actions()
        .scroll(0, 0, 0, 300, scrollpage)
        .perform()
        await driver.sleep(5000)
      await driver.findElement(By.linkText("Sổ quỹ")).click();

      await driver
        .findElement(
          By.xpath(
            '//*[@id="root"]/div/div/div[2]/div/div/div/div/div/div[1]/div[2]/div/button[1]'
          )
        )
        .click();
      await driver.wait(
        elementLocated(By.xpath('//*[@id="add_to_revenue"]')),
        3000
      );
      let CheckboxCashbook = await driver
        .findElement(By.xpath('//*[@id="add_to_revenue"]'))
        .isSelected();
      if (CheckboxCashbook == true) {
        console.log("Đã click");
      } else {
        console.log("Chưa click");
      }
    } finally {
      await driver.quit();
    }
  });
});
