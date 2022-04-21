const { Builder, By } = require('selenium-webdriver');

const driver = new Builder()
    .forBrowser('firefox')
    .build();

    async function simpleRegestration() {
        try {
            await driver.get('https://rori4.github.io/selenium-practice/#/pages/practice/simple-registration');
            await driver.findElement(By.name('email')).sendKeys('test@gmail.com');
            await driver.findElement(By.id('password')).sendKeys('testtest');
            await driver.findElement(By.name('submit')).click();
        } catch (error) {
            console.log(error)
        }
    }
    
    simpleRegestration()