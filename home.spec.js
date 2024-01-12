const { By, Builder, WebElementCondition, until } = require('selenium-webdriver');
const assert = require('assert');

(async function homeTask(){
    let driver;

    try {
    //perform the tests here
        driver = new Builder().forBrowser('chrome').build(); //specify the driver instance
        await driver.get('https://amlucid.com/'); //get the website

        let title = await driver.getTitle();
        console.log('****Home Page Title****' + title);
        assert.equal("Home Page - Admlucid", title); //test expected title against actual title

        await driver.manage().setTimeouts({implicit: 500}); // set timeouts for 500s
        await driver.manage().window().maximize(); //maximize the browser window

        let url = driver.getCurrentUrl(); //get url
        console.log("****Current URL****" + url);

        await driver.navigate().to('https://admlucid.com/Home/Selenium');

        let message = await driver.findElement(By.xpath('//*[@id="Selenium"]/h1'));
        await driver.wait(until.elementIsEnabled(message), 2000);

        let value = (await message.getText()).trim();
        assert.equal("Selenium Automation Testing", value);

        console.log("****Page Header****"+value);
    } catch(e){
        console.log(e);
        await driver.quit();
    }
}())