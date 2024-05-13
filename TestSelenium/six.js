const { Builder, Browser, By } = require("selenium-webdriver");
const { elementLocated } = require("selenium-webdriver/lib/until");

describe("Test 2",async () => {
    let driver ;
// nếu muốn có gợi ý bỏ thằng khởi tạo trình điều khiển lên đây nào chạy thì bỏ xuống
    before(async () => {
        try {
            driver = await new Builder().forBrowser(Browser.CHROME).build();
        } catch (error) {
            console.error('Không thể khởi tạo trình điều khiển:', error);
        }
    });

    beforeEach(async () => {
        try {
            await driver.get("https://staging-clinic.gpet.com.vn");
            await driver.sleep(3000);
            await driver.findElement(By.id("normal_login_email")).sendKeys("tientien123@gpet.vn");
            await driver.findElement(By.xpath('//*[@id="normal_login_password"]/input')).sendKeys("hongvien");
        } catch (error) {
            console.error('Có lỗi khi setup:', error);
        }
    });

    afterEach(async () => {
        try {
            if (driver) {
                await driver.quit();
            }
        } catch (error) {
            console.error('Có lỗi khi thoát:', error);
        }
    });

    it("Loggin pass 2", async () => {
            let buttonLogin = await driver.findElement(By.xpath('//*[@id="normal_login"]/div[5]/div/div/div/div/button')).isEnabled();
            if (buttonLogin) {
                await driver.findElement(By.xpath('//*[@id="normal_login"]/div[5]/div/div/div/div/button')).click();
            } else {
                console.log("Nút Login không nhấn được nèeee!");
            }
            await driver.sleep(3000);
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
          await driver.sleep(3000);
    
          // Tìm phần tử mà bạn muốn hover qua
    
          let elementToHover = await driver.findElement(
            By.xpath('//*[@id="root"]/div/div/div[1]/div/ul')
          );
    
          // Thực hiện hành động hover bằng cách sử dụng Actions của Selenium WebDriver
          await driver.actions().move({ origin: elementToHover }).perform();
    
          //await driver.executeScript("window.scrollBy(0, 300)");
          await driver.findElement(By.linkText("Sổ quỹ")).click();
          await driver.sleep(3000);
          await driver
            .findElement(
              By.xpath(
                '//*[@id="root"]/div/div/div[2]/div/div/div/div/div/div[1]/div[2]/div/button[1]'
              )
            )
            .click();
            await driver.sleep(3000);
          await driver.wait(
            elementLocated(By.xpath('//*[@id="add_to_revenue"]')),
            3000
          );
          await driver.sleep(3000);
          let CheckboxCashbook = await driver
            .findElement(By.xpath('//*[@id="add_to_revenue"]'))
            .isSelected();
          if (CheckboxCashbook == true) {
            console.log("Đã click");
          } else {
            console.log("Chưa click");
          }
          // lấy 1 mảng text từ thẻ th
          let arrayTH = await driver.findElements(By.css("th"));
          for (let i = 0; i < arrayTH.length; i++) {
            const element = arrayTH[i];
            let text = await element.getText();
            console.log(text);
          }
    });
});
