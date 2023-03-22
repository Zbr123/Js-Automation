const AndroidOperations = require('../operations-definition/AndroidOperations');

class RegisterFlowPO extends AndroidOperations {
    constructor() {
        super();
        // Start Cancel policy
        this.startedButton = 'signupButtonWelcome';
        this.begginnerLevelButton = 'levelButton_beginner';
        this.childFirstName = 'nameTextInput';
        this.nameSubmitButton = 'nameSubmitButton';
        this.emailTextInput = '//android.widget.EditText[@content-desc="SignInScreen:EmailInput:email"]';
        this.gdprCheckBox = 'gdprCheckbox';
        this.receiveComunicationCheckBox = '(//android.view.ViewGroup[@content-desc="gdprCheckbox"]/following-sibling::android.view.ViewGroup)[1]';
        this.signupButton = 'signupButton';
        this.accountExistsText = `//android.widget.TextView[@text, "${translations.youAlreadyHaveAnAccount}"]`;
    }

    /* CUSTOM METHODS */
    startRegisterProcess = () => super.clickBy(this.startedButton, 220000);

    async completeRegisterProcess(dataTable) {
        const input = dataTable.hashes();
        // DataTable values
        const level = input[0].Level;
        const year = input[0].Year;
        const month = input[0].Month;
        const name = input[0].Name;
        const email = input[0].Email;
        // Register Flow
        const levelSelector = this.getEnglishLevelSelector(level);
        await super.clickBy(levelSelector);
        await this.selectBornYear(year);
        await this.selectMonth(month);
        await this.completeName(name);
        // email submit screen
        await super.fillTextBy(this.emailTextInput, email);
        await super.clickBy(this.gdprCheckBox);
        await super.clickBy(this.receiveComunicationCheckBox);
        return super.clickBy(this.signupButton);
    }

    checkAccountExistsScreenIsDisplayed() {
        return super.elementDisplayedBy(this.accountExistsText);
    }

    /* AUXILIAR METHODS */
    getEnglishLevelSelector(level) {
        if (level === '1') return this.begginnerLevelButton;
        return false; // to manage if it not exists
        // to implemented more levels based on the level
        // if (level === '2') return this.begginnerLevelButton;
        // if (level === '3') return this.begginnerLevelButton;
    }

    async selectBornYear(year) {
        const yearButton = `//android.widget.TextView[contains(@text, "${year}")]/parent::*`;
        await super.elementDisplayedBy(yearButton);
        return super.clickBy(yearButton);
    }

    async selectMonth(month) {
        const monthButton = `//android.widget.TextView[contains(@text, "${month}")]/parent::*`;
        await super.elementDisplayedBy(monthButton);
        return super.clickBy(monthButton);
    }

    async completeName(name) {
        await super.elementDisplayedBy(this.childFirstName);
        await super.fillTextBy(this.childFirstName, name);
        return super.clickBy(this.nameSubmitButton);
    }
}

module.exports = new RegisterFlowPO();