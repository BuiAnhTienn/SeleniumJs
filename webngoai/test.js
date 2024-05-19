const { should } = require("chai").should();
const { Builder, Browser, By } = require("selenium-webdriver");

describe("Checkbox Test", function () {
  let driver ;
  // let driver = await new Builder().forBrowser(Browser.CHROME).build();

  // Khởi tạo driver trước mỗi kiểm thử
  beforeEach(async function () {
     driver = await new Builder().forBrowser(Browser.CHROME).build();
  });

  // Đóng driver sau mỗi kiểm thử
  afterEach(async function () {
    if (driver) {
      await driver.quit();
    }
  });

  it("should check the checkbox if not already checked and verify text", async function () {
    try {
      await driver.get(
        "https://demo.seleniumeasy.com/basic-checkbox-demo.html"
      );
      let checkbox = await driver.findElement(By.id("isAgeSelected"));

      if (!(await checkbox.isSelected())) {
        await checkbox.click();
        let textDisplayed = await driver.findElement(By.id("txtAge"));

        if (await textDisplayed.isDisplayed()) {
          let text = await textDisplayed.getText();
          console.log(text);
        } else {
          console.log("kh có text");
        }
      } else {
        console.log("Đã tick");
      }
// scroll mới
      await driver.executeScript("window.scrollBy(0, 200);");

      let checkbox1 = await driver.findElement(By.xpath('//*[@id="easycont"]/div/div[2]/div[2]/div[2]/div[1]/label/input'));
      let checkbox2 = await driver.findElement(By.xpath('//*[@id="easycont"]/div/div[2]/div[2]/div[2]/div[2]/label/input'));
      let checkbox3 = await driver.findElement(By.xpath('//*[@id="easycont"]/div/div[2]/div[2]/div[2]/div[3]/label/input'));
      let checkbox4 = await driver.findElement(By.xpath('//*[@id="easycont"]/div/div[2]/div[2]/div[2]/div[4]/label/input'));
      if (await checkbox1.isSelected()== false && await checkbox2.isSelected() == false && await checkbox3.isSelected() == false && await checkbox4.isSelected() == false){
        console.log(' Chưa tick cái nào')
      } else {
        console.log(' đã tích hết r')
      }
      await driver.sleep(5000)
      let buttonAll = await driver.findElement(By.xpath('//*[@id="check1"]'));
      // dùng get Attribute 
      if (await buttonAll.getAttribute('value') == "Check All") {
        await buttonAll.click();
        console.log("Đã đúng");
      } else {
        console.log("đã sai");
      }
      await driver.sleep(5000)
      let checkBox1 = await driver.findElement(By.xpath('//*[@id="easycont"]/div/div[2]/div[2]/div[2]/div[1]/label/input'));
      let checkBox2 = await driver.findElement(By.xpath('//*[@id="easycont"]/div/div[2]/div[2]/div[2]/div[2]/label/input'));
      let checkBox3 = await driver.findElement(By.xpath('//*[@id="easycont"]/div/div[2]/div[2]/div[2]/div[3]/label/input'));
      let checkBox4 = await driver.findElement(By.xpath('//*[@id="easycont"]/div/div[2]/div[2]/div[2]/div[4]/label/input'));
      if (await checkBox1.isSelected()== true && await checkBox2.isSelected() == true && await checkBox3.isSelected() == true && await checkBox4.isSelected() == true) {
        console.log("đã click");
      }else{
        console.log(' chưa click')
      }

      let uncheckAll = await driver.findElement(By.xpath('//*[@id="check1"]'))
      if (await uncheckAll.getAttribute('value') == 'Uncheck All') {
        console.log(' đã click hết và thay đổi thành Uncheck All')
        
      } else {
        console.log('chưa thay đổi thành Uncheck All')
      }
    } catch (error) {
      console.error("Error during the test:", error);
    }
  });
});
