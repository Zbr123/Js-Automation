require('dotenv').config({ path: `${process.cwd()}/env/.env` });
const {
     BeforeAll, Before, AfterAll, After,
} = require('@cucumber/cucumber');
const setup = require('../../bin/setup');
const caps = require('../../bin/capabilities');

Before({ timeout: 10 * 5000 }, async () => {
    global.driver = setup.newDriver;
    return driver.init(caps[process.env.DEVICE]).setImplicitWaitTimeout(10000).catch((err) => {
        throw new Error(err);
    });
});

After({ timeout: 2 * 5000 }, async () => driver.quit().catch((err) => {
        console.log(err);
        console.log('* Session finished'.red);
    }));

module.exports = {
    BeforeAll,
    Before,
    AfterAll,
    After,
};