// tests/loginTest.js
const { getDriver } = require('../unitls/driverSetup');
const LoginPage = require('../pages/LoginPage');
const { expect } = require('chai');

describe('Login Page Test', function() {
    let driver;
    let loginPage;

    this.timeout(30000); // Tăng thời gian chờ tối đa lên 30 giây

    before(async function() {
        driver = await getDriver();
        loginPage = new LoginPage(driver);
    });

    after(async function() {
        await driver.quit();
    });

    it('should login with valid credentials', async function() {
        await driver.get('https://staging.gpet.vn/Login');
        await driver.sleep(3000)
        await loginPage.login('tientien123@gpet.vn', 'anhtienn');

        const currentUrl = await driver.getCurrentUrl();
        expect(currentUrl).to.equal('https://staging.gpet.vn/Login');

        // const errorMessage = await loginPage.getErrorMessage();
        // expect(errorMessage).to.be.empty;
    });


});
