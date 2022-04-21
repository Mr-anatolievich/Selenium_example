// const {Builder, By, Key, util} = require('selenium-webdriver');
// async function example() {
//     let driver = await new Builder().forBrowser('firefox').build();
//     await driver.get('http://google.com');
//     await driver.findElement(By.name('q')).sendKeys('Selenium', Key.RETURN);
// }
// example()

const {Builder} = require('selenium-webdriver');
const firefox = require('selenium-webdriver/firefox');

const options = new firefox.Options();

options.setPreference('browser.download.dir', 'D:\\mySeleniumDownloads');
options.setPreference('browser.download.folderList', 1);
options.setPreference("browser.helperApps.neverAsk.saveToDisk", "application/x-csv");

const driver = new Builder().forBrowser('firefox').setFirefoxOptions(options).build();
driver.get('http://samplecsvs.s3.amazonaws.com/Sacramentorealestatetransactions.csv');


