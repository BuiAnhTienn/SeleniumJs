// pages/loginPage.js
const { By } = require('selenium-webdriver');

class LoginPage {
    constructor(driver) {
        this.driver = driver;
        this.usernameInput = By.id('normal_login_email');
        this.passwordInput = By.xpath('//*[@id="normal_login_password"]/input');
        this.loginButton = By.xpath('//*[@id="normal_login"]/div[5]/div/div/div/div/button');
        // this.errorMessage = By.id('errorMessage');
    }

    async enterUsername(username) {
        await this.driver.findElement(this.usernameInput).sendKeys(username);
    }

    async enterPassword(password) {
        await this.driver.findElement(this.passwordInput).sendKeys(password);
    }

    async clickLoginButton() {
        await this.driver.findElement(this.loginButton).click();
    }

    async getErrorMessage() {
        return await this.driver.findElement(this.errorMessage).getText();
    }

    async login(username, password) {
        await this.enterUsername(username);
        await this.enterPassword(password);
        await this.clickLoginButton();
    }
}

module.exports = LoginPage;
