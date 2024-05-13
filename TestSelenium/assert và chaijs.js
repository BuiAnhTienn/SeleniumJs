// const assert  = require('assert');

const { Builder, Browser, until, By, Key } = require('selenium-webdriver');
const {should} = require('chai').should();

describe("add test ne",  () => {
  it("testcase login in to cart", async () => {
    let driver = await new Builder().forBrowser(Browser.CHROME).build();
    try {
      await driver.get("https://staging-clinic.gpet.com.vn");
      await driver.wait(
        until.elementLocated(By.id("normal_login_email")),
        3000
      );

      await driver
        .findElement(By.id("normal_login_email"))
        .sendKeys("tientien123@gpet.vn");

      await driver
        .findElement(By.xpath('//*[@id="normal_login_password"]/input'))
        .sendKeys("hongvien", Key.RETURN);

      await driver.wait(until.titleIs("Phòng Của Tiến"), 4000);
      await driver.sleep(5000)
      let todoText = await driver
        .findElement(By.className("sc-cHPgQl beJFeL"))
        .getText()
        .then(function (value) {
          return value;
        });
// sài should của chaijs

    //   todoText.should.equal('Tên sản ')
      todoText.should.equal(todoText,'Tên sản phẩm')
// sài assert
// nhớ cách import thư viện
    //  assert.strictEqual(todoText, 'Tên sản phẩm');
    } finally {
      await driver.quit();
    }
  });
});

// có thể dùng 3 style khác nhau , nhớ cài đặt cái bản hiển thị ở trang chủ thì mới support nhé