const { Then, When } = require('@cucumber/cucumber');
const assert = require('assert');
const CreateAccount = require('../../page-objects/create-account-page');

Then('I should see Create Account Screen', { timeout: 1000 * 60 }, async () => {
  assert.ok(await CreateAccount.checkCreateAccountTextDisplayed(), 'Create Accounts');
});
When('I click on phone number field', { timeout: 5000 * 60 }, async () => {
  await CreateAccount.phoneNumbeFunc('1231313');
});
When('I click on Sign Up Button', { timeout: 5000 * 60 }, async () => {
  await CreateAccount.clickOnSignUpButton();
});
When('I enter valid OTP', { timeout: 5000 * 60 }, async () => {
  await CreateAccount.otpFunc('1231');
});
When('I click on Verify', { timeout: 5000 * 60 }, async () => {
  await CreateAccount.clickOnVerifyButton();
});
When('I click on Enter Password Field', { timeout: 5000 * 60 }, async () => {
  await CreateAccount.enterPassword('101010');
});
When('I click on Repeat Password Field', { timeout: 5000 * 60 }, async () => {
  await CreateAccount.repeatPassword('101010');
});
When('I click on Next Button', { timeout: 5000 * 60 }, async () => {
  await CreateAccount.clickOnNextButton();
});
When('I click on Name Field', { timeout: 5000 * 60 }, async () => {
  await CreateAccount.nameFieldFunc('Zubair');
});
When('I click on Surname Field', { timeout: 5000 * 60 }, async () => {
  await CreateAccount.surnameFunc('Alam');
});
When('I click on Birth Date Field', { timeout: 5000 * 60 }, async () => {
  await CreateAccount.birthFunc('1031995');
});
When('I click on Email Field', { timeout: 5000 * 60 }, async () => {
  await CreateAccount.emailFunc('syedzubairalam123@gmail.com');
});

Then('I should see profile info form fields', { timeout: 1000 * 60 }, async () => {
  assert.ok(await CreateAccount.checkCreateAccountTextDisplayed(), 'Create Accounts');
});

When('I click on Go to Profile Button', { timeout: 5000 * 60 }, async () => {
  await CreateAccount.clickOnGotoProfile();
});
