const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');
const RegisterFlowPO = require('../../page-objects/RegisterFlowPO');

Given('I started the register process', { timeout: 60000 * 10000 }, async function() {
    await RegisterFlowPO.startRegisterProcess();
});

When('I complete the register with an existing email', { timeout: 80000 * 10000 }, async function(dataTable) {
    await RegisterFlowPO.completeRegisterProcess(dataTable);
});

Then('I should be informed that the email is in use', { timeout: 80000 * 10000 }, async function() {
    assert.ok(await RegisterFlowPO.checkAccountExistsScreenIsDisplayed(), 'Expected error message is displayed');
});