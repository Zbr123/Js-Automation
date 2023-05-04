const { Given, When } = require('@cucumber/cucumber');
const WelcomeScreen = require('../../page-objects/welcome-screen');

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
