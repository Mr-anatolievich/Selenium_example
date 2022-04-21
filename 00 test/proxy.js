//Using proxy Server

const {Builder} = require('selenium-webdriver');

const proxy = require('selenium-webdriver/proxy')
const proxyServer = '200.122.86.177:8080';

const driver = new Builder()
    .forBrowser('firefox')
    .setProxy(proxy.manual({
        http: proxyServer,
        https: proxyServer
    }))
    .build();

driver.get('https://whatismyipaddress.com/');