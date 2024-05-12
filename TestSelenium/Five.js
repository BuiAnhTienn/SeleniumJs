const { Builder, Browser, By } = require("selenium-webdriver");


describe("Test 2", () => {
    let driver;
    beforeEach( async() => {
       try {
        driver = await new Builder().forBrowser(Browser.CHROME).build();
        await driver.get("https://staging-clinic.gpet.com.vn");
        await driver.sleep(3000)
        await driver.findElement(By.id("normal_login_email")).sendKeys("tientien123@gpet.vn");
        await driver.findElement(By.xpath('//*[@id="normal_login_password"]/input')).sendKeys("hongvien");
       } catch (error) {
        console.error('Có lỗi khi setup',error)
       }
        
    });

    afterEach(async() => {
        try {
            await driver.quit();
        } catch (error) {
            console.error('Có lỗi khi thoát',error)
        }
        
    });
  it("Loggin pass 2", async () => {
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
      await driver.sleep(5000)

  });
});
