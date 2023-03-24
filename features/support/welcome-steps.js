const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');
const WelcomeScreen = require('../../page-objects/WelcomeScreen');

Given('I install and open the android app', { timeout: 1000 * 5 }, async () => {
});

When('I click on Get Started Button', { timeout: 1000 * 5 }, async () => {
  await WelcomeScreen.clickOnGetStartButton();
});

When('I select the language', { timeout: 1000 * 5 }, async () => {
  await WelcomeScreen.selectLn();
  await WelcomeScreen.clickOnNextButton();
 });

When('I press the next button on Earn Rewards screen', { timeout: 1000 * 5 }, async () => {
  await WelcomeScreen.clickOnNextButton();
 });

When('I press the next button on Get Special Discounts', { timeout: 1000 * 5 }, async () => {
  await WelcomeScreen.clickOnNextButton();
 });

Then('I should see Create Account Screen', { timeout: 1000 * 5 }, async () => {
    assert.ok(await WelcomeScreen.checkCreateAccountTextDisplayed(), 'Create Account');
 });