const AndroidOperations = require('../operations-definition/android-operations');

class WelcomeScreen extends AndroidOperations {
  constructor() {
    super();
    this.getStartedButton = 'Get Started';
    this.nextButton = 'Next';
    this.skipButton = 'Skip';
    this.language = '//harisandroid.view.View[@content-desc="Choose Your Language"]/android.widget.ImageView[5]';
  }

  async clickOnGetStartButton() {
    await super.elementDisplayedBy(this.getStartedButton);
    return super.clickBy(this.getStartedButton);
  }

  async clickOnNextButton() {
    await super.elementDisplayedBy(this.nextButton);
    return super.clickBy(this.nextButton);
  }

  async selectLn() {
    await super.elementDisplayedBy(this.language);
    return super.clickBy(this.language);
  }

  async clickOnSkipButton() {
    await super.elementDisplayedBy(this.skipButton);
    return super.clickBy(this.skipButtoncheckAccountExistsScreenIsDisplayed);
  }
}
module.exports = new WelcomeScreen();