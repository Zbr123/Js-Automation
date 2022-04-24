require('dotenv').config({ path: `${process.cwd()}/env/.env` });
const { BeforeAll, AfterAll } = require('@cucumber/cucumber');
const setup = require('../../bin/setup');
const caps = require('../../bin/capabilities');

BeforeAll({ timeout: 80000 }, async() => {
    global.driver = setup.newDriver;
    return driver.init(caps[process.env.DEVICE]).setImplicitWaitTimeout(10000).catch((err) => {
        throw new Error(err);
    });
});

AfterAll({ timeout: 50000 }, async() => {
    return driver.quit().catch((err) => {
        console.log(err);
        console.log('* Session finished'.red);
    });
});

module.exports = {
    BeforeAll,
    AfterAll,
};