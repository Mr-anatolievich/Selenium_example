const { Builder } = require('selenium-webdriver');

const driver = new Builder()
    .forBrowser('firefox')
    .build();

async function openWebsite() {
    try {
        await driver.get('https://www.yahoo.com/');
        await driver.get('https://www.google.com/')
    } catch (error) {
        console.log(error)
    }

}
openWebsite();