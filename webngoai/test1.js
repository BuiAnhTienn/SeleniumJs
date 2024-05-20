const { should } = require("chai").should();
const { Builder, Browser, By } = require("selenium-webdriver");

describe("Checkbox Test", function () {
  let driver ;
//   let driver = await new Builder().forBrowser(Browser.CHROME).build();

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
        //   let todoText = await driver
        //   .findElement(By.id("txtAge"))
        //   .getText()
        //   .then(function (value) {
        //     return value;
        //   });
        //   todoText.should.equal('Success - Check box is checked')
          console.log(text);
        } else {
          console.log("kh có text");
        }
      } else {
        console.log("Đã tick");
      }
// scroll mới
      await driver.executeScript("window.scrollBy(0, 200);");

    let checkboxList = await driver.findElements(By.className('cb1-element'))
    let size = checkboxList.length;
    console.log('số lượng phần tư :',size)
    for (let i = 0; i < checkboxList.length; i++) {
        const element = checkboxList[i];
        if (await element.isSelected() === false) {
          console.log('Checkbox này không được chọn: ' , (i + 1));
        } else {
          console.log('Checkbox này đã được chọn: ' , (i + 1));
        }
      }
      await driver.sleep(5000)
      let buttonAll = await driver.findElement(By.xpath('//*[@id="check1"]'));
      // dùng get Attribute để lấy thuộc tính value khi nó nằm trong cục button
      if (await buttonAll.getAttribute('value') == "Check All") {
        await buttonAll.click();
        console.log("Đã đúng");
      } else {
        console.log("đã sai");
      }
      await driver.sleep(5000)

      // cái này là cách chay
    //   let checkboxList2 = await driver.findElements(By.className('cb1-element'))
    //   let size2 = checkboxList2.length;
    //   console.log('số lượng phần tư :',size2)
    //   for (let i = 0; i < checkboxList2.length; i++) {
    //       const element = checkboxList2[i];
    //       if (await element.isSelected() === true) {
    //         console.log('Checkbox này  được chọn: ' + (i + 1));
    //       } else {
    //         console.log('Checkbox này không được chọn: ' + (i + 1));
    //       }
    //     }
// nên sài cách này nếu cần xác minh lại
    for (let i = 0; i < checkboxList.length; i++) {
        const element = checkboxList[i];
        if ( await element.isSelected() === true) {
            console.log('Đã được chọn hết' + (i + 1))
        } else {
            console.log('Chưa được chọn hết' + (i + 1))
        }
        
    }
      // dùng get Attribute để lấy thuộc tính value khi nó nằm trong cục button.......
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
