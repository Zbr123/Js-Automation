require('dotenv').config({ path: `${process.cwd()}/env/.env` });
const { BeforeAll, Before, AfterAll, After } = require('@cucumber/cucumber');
const setup = require('../../bin/setup');
const caps = require('../../bin/capabilities');

Before({ timeout: 80000 }, async() => {
    global.driver = setup.newDriver;
    return driver.init(caps[process.env.DEVICE]).setImplicitWaitTimeout(10000).catch((err) => {
        throw new Error(err);
    });
});

After({ timeout: 50000 }, async() => {
    return driver.quit().catch((err) => {
        console.log(err);
        console.log('* Session finished'.red);
    });
});

module.exports = {
    BeforeAll,
    Before,
    AfterAll,
    After,
};