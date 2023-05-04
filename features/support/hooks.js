require('dotenv').config({ path: `${process.cwd()}/env/.env` });
const {
  BeforeAll, Before, AfterAll, After,
} = require('@cucumber/cucumber');
const Integration = require('../../page-objects/api-integration');

const setup = require('../../bin/setup');
const caps = require('../../bin/capabilities');

Before({ timeout: 10 * 5000 }, async (scenario) => {
  // integration.createRun();
  global.driver = setup.newDriver;
  const tags = scenario.getTags();

  console.log(' Test Case CALL ' + tags);

  return driver.init(caps[process.env.DEVICE]).setImplicitWaitTimeout(10000).catch((err) => {
    throw new Error(err);
  });
});

After({ timeout: 10 * 5000 }, async (scenario) => {
  console.log(' Test Case Status ' + scenario.result.status.toLowerCase());
  // var tags = Scenario.getTags();
  const tags = scenario.getTags();

  // this.current_module = tags[0].getName();

  // const tags = scenario.getTags().map(tag => tag.getName());
  // const tags = scenario.getTags().map(tag => tag.getName());
  console.log(' Test Case CALL ' + tags);

  Integration.addCaseToTestRun(180, scenario.result.status.toLowerCase());

  //    await integration.afterMethodCall();
  driver.quit();
});

module.exports = {
  BeforeAll,
  Before,
  AfterAll,
  After,
};