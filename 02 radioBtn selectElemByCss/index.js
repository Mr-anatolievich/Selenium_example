const { Builder, By } = require('selenium-webdriver');

const driver = new Builder()
    .forBrowser('firefox')
    .build();

    async function radioButtonForm(){
        await driver.get('https://rori4.github.io/selenium-practice/#/pages/practice/radio-button-form');
        await driver.findElement(By.css('#title')).sendKeys('Tittle Tittle Tittle Tittle Tittle');
        await driver.findElement(By.css('#description')).sendKeys('description description description');
        await driver.findElement(By.css('div:nth-child(2) > label > span.custom-control-indicator')).click();
        await driver.findElement(By.name('submit')).click();
    }
    radioButtonForm();