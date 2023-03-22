# **Mobile Automation Framework With NodeJs and Cucumber**

This is a mobile automation framework based on NodeJS, Appium and Cucumber, to prepare and run your mobile tests.

&nbsp;

# **What I need?**

You need to have installed the follwoing:
 - NodeJs installed globally (12 or higher)
 - Java and Android Studio (SDK)
 - Appium Desktop GUI or Appium Node version 
 - Appium Inspector (not mandatory to run the tests)

&nbsp;

# **How to run the test**

1. You should ensure that appium is installed, if not, you should do the following:

```
 npm i -g appium
```

2. Check the installation with appium-doctor as follows:

```
 npm i -g appium-doctor
 appium-doctor
```

3. Generate an Android 12 emulator with android studio and check that is avilable:

```
 adb devices


 Output expected:

 List of devices attached
 emulator-5554   device
```

4. Run Appium with the follwoing command from node in the terminal (or just launch it from Appium desktop)

```
 appium -p 4723
```

5. Move to the project path from your terminal and execute the follwoing:

```
 npm install

` npm run test`
```

6.- Check the report. You will find the report in the follwoing path:

```
  mobile-automation-framework\report
```

&nbsp;

# **The framework:**

This automation framework is based on Page Object Model design creating objects repository for storing all apps elements. In this way we reduce code duplication, is more easy to maintain, read and we decouple the technology from the tests.

Structure:
 
  - **app**: this folder contain the apk to be used in the test
  - **bin**: this folder contain the core files that support the automation
    - **capabilities.js**: are defined the capabilites to be used
    - **servers.js**: to select where the appium is going to be executed
    - **setup.js**: setup the driver and translations
    - **translations.js**
  - **env**: this folder contains the environment variables
  - **features**: this folder contains all the files related to the execution of cucumber
      - **support**
          - **hooks.js**: to define the before, beforeAll, etc.
          - **register-steps.js**: the steps implementation
      - **register-flow.feature**: the test feature
  - **operations-definition**: main clases dedicated to abstract and define the driver methods
  - **page-objects**: contain the page object models to be used in the automation
  - **report**: contain the reports of the executions
