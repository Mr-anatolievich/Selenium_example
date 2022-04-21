const { Builder, By, Key } = require('selenium-webdriver')

const driver = new Builder()
    .forBrowser('firefox')
    .build()

    async function iframeForm() {
        try {
            await driver.get('https://rori4.github.io/selenium-practice/#/pages/practice/iframe-form');
            await driver.switchTo().frame(0);
            await driver.findElement(By.xpath('//input[@aria-labelledby="i1"]')).sendKeys('Yaroslav');
            await driver.actions().sendKeys(Key.TAB).perform();
            await driver.actions().sendKeys(Key.chord(Key.ARROW_DOWN, Key.ARROW_DOWN, Key.ARROW_DOWN)).perform();
            await driver.actions().sendKeys(Key.chord(Key.TAB, Key.TAB, Key.TAB,)).perform();
            await driver.actions().sendKeys(Key.chord(Key.ARROW_DOWN)).perform();
            await driver.actions().sendKeys(Key.chord(Key.ARROW_DOWN)).perform();
            await driver.actions().sendKeys(Key.chord(Key.ARROW_DOWN)).perform();
            await driver.actions().sendKeys(Key.chord(Key.SPACE)).perform();
            await driver.actions().sendKeys(Key.chord(Key.TAB, '15')).perform();
            await driver.actions().sendKeys(Key.chord(Key.TAB, '04')).perform();
            await driver.actions().sendKeys(Key.chord(Key.TAB, '2022')).perform();
            await driver.actions().sendKeys(Key.chord(Key.TAB, Key.SPACE)).perform();
            await driver.actions().sendKeys(Key.chord(Key.TAB, Key.TAB, Key.SPACE)).perform();
            await driver.actions().sendKeys(Key.chord(Key.TAB, 'I want to tell you my secret')).perform();
            await driver.actions().sendKeys(Key.chord(Key.TAB, Key.ENTER)).perform();


        } catch (error) {
            console.log(error)
        }
    }
    iframeForm() 