const AndroidOperations = require('../operations-definition/android-operations');

class CreateAccount extends AndroidOperations {
  constructor() {
    super();
    this.createAccount = 'Create Account';
    this.profileScreen = 'Fill Profile';
    // eslint-disable-next-line max-len
    this.SignUpButton = 'Sign Up';
    // eslint-disable-next-line max-len
    this.PhoneNumberField = '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.widget.EditText';
    this.OtpField = '//android.view.View[2]/android.widget.EditText';
    this.verify = 'Verify';
    this.enterPasswordField = '//android.widget.EditText[1]';
    this.repeatPasswordField = '//android.widget.EditText[2]';
    this.NextButton = 'Next';
    this.NameField = '//android.widget.EditText[1]';
    this.surNameField = '//android.widget.EditText[2]';
    this.birthField = '//android.view.View/android.view.View/android.view.View/android.view.View/android.view.View/android.widget.ImageView[2]';
    this.emailField = '//android.widget.ImageView[3]';
    this.Gotoprofile = 'Go to my profile';
  }

  checkCreateAccountTextDisplayed() {
    return super.elementDisplayedBy(this.createAccount);
  }

  checkProfileScreenTextDisplayed() {
    return super.elementDisplayedBy(this.profileScreen);
  }

  async phoneNumbeFunc(phone) {
    await super.clickByXPath(this.PhoneNumberField);
    await super.fillTextByXPath(this.PhoneNumberField, phone);
  }

  async clickOnPhoneNumberField() {
    await super.elementDisplayedBy(this.PhoneNumberField);
    return super.clickBy(this.getStartedButton);
  }

  async clickOnSignUpButton() {
    await super.elementDisplayedBy(this.SignUpButton);
    return super.clickBy(this.SignUpButton);
  }

  async otpFunc(otp) {
    await super.fillTextBy(this.OtpField, otp);
  }

  async clickOnVerifyButton() {
    await super.elementDisplayedBy(this.verify);
    return super.clickBy(this.verify);
  }

  async clickOnNextButton() {
    await super.elementDisplayedBy(this.NextButton);
    return super.clickBy(this.NextButton);
  }

  async enterPassword(pass) {
    await super.clickBy(this.enterPasswordField);
    await super.fillTextBy(this.enterPasswordField, pass);
  }

  async repeatPassword(pass) {
    await super.clickByXPath(this.repeatPasswordField);
    await super.fillTextByXPath(this.repeatPasswordField, pass);
  }

  async nameFieldFunc(name) {
    await super.clickByXPath(this.NameField);
    await super.fillTextByXPath(this.NameField, name);
  }

  async surnameFunc(surname) {
    await super.clickByXPath(this.surNameField);
    await super.fillTextByXPath(this.surNameField, surname);
  }

  async birthFunc(birthdate) {
    //   await super.clickByXPath(this.birthField);
    await super.fillTextByXPath(this.birthField, birthdate);
  }

  async emailFunc(email) {
    await super.clickByXPath(this.emailField);
    await super.fillTextByXPath(this.emailField, email);
  }

  async clickOnGotoProfile() {
    await super.elementDisplayedBy(this.Gotoprofile);
    return super.clickBy(this.Gotoprofile);
  }
}
module.exports = new CreateAccount();
