const { Builder, By } = require('selenium-webdriver');

const driver = new Builder()
    .forBrowser('firefox')
    .build();

    async function datepicker() {
        await driver.get('https://rori4.github.io/selenium-practice/#/pages/practice/datepicker-form');
        await driver.findElement(By.xpath('//input[@formcontrolname="dateOne"]')).sendKeys('Apr 15, 2022');
        await driver.findElement(By.xpath('//input[@formcontrolname="dateTwo"]')).sendKeys('Apr 13, 2022 - Apr 20, 2022');
        await driver.findElement(By.id("submit")).click();
    }
    datepicker()