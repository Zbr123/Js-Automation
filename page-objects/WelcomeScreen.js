const AndroidOperations = require('../operations-definition/AndroidOperations');

class WelcomeScreen extends AndroidOperations {
    constructor() {
        super();
        this.getStartedButton = 'Get Started';
        this.nextButton = 'Next';
        this.skipButton = 'Skip';
        this.language = '//android.view.View[@content-desc="Choose Your Language"]/android.widget.ImageView[5]';
        this.createAccount = 'Create Account';
    }

    /* CUSTOM METHODS */
   // startRegisterProcess = () => super.clickBy(this.startedButton, 220000);

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

    checkCreateAccountTextDisplayed() {
        return super.elementDisplayedBy(this.createAccount);
    }
}
module.exports = new WelcomeScreen();

//     async completeRegisterProcess(dataTable) {
//         const input = dataTable.hashes();
//         // DataTable values
//         const level = input[0].Level;
//         const year = input[0].Year;
//         const month = input[0].Month;
//         const name = input[0].Name;
//         const email = input[0].Email;
//         // Register Flow
//         const levelSelector = this.getEnglishLevelSelector(level);
//         await super.clickBy(levelSelector);
//         await this.selectBornYear(year);
//         await this.selectMonth(month);
//         await this.completeName(name);
//         // email submit screen
//         await super.fillTextBy(this.emailTextInput, email);
//         await super.clickBy(this.gdprCheckBox);
//         await super.clickBy(this.receiveComunicationCheckBox);
//         return super.clickBy(this.signupButton);
//     }

//     checkAccountExistsScreenIsDisplayed() {
//         return super.elementDisplayedBy(this.accountExistsText);
//     }

//     /* AUXILIAR METHODS */
//     getEnglishLevelSelector(level) {
//         if (level === '1') return this.begginnerLevelButton;
//         return false; // to manage if it not exists
//         // to implemented more levels based on the level
//         // if (level === '2') return this.begginnerLevelButton;
//         // if (level === '3') return this.begginnerLevelButton;
//     }

//     async selectBornYear(year) {
//         const yearButton = `//android.widget.TextView[contains(@text, "${year}")]/parent::*`;
//         await super.elementDisplayedBy(yearButton);
//         return super.clickBy(yearButton);
//     }

//     async selectMonth(month) {
//         const monthButton = `//android.widget.TextView[contains(@text, "${month}")]/parent::*`;
//         await super.elementDisplayedBy(monthButton);
//         return super.clickBy(monthButton);
//     }

//     async completeName(name) {
//         await super.elementDisplayedBy(this.childFirstName);
//         await super.fillTextBy(this.childFirstName, name);
//         return super.clickBy(this.nameSubmitButton);
//     }