exports.Android12 = {
    automationName: 'UiAutomator2',
    platformName: 'Android',
    platformVersion: '12',
    deviceName: 'Android12',
    app: `${process.cwd()}/app/lingokids.apk`,
    browserName: '',
    clearSystemFiles: true,
    udid: 'emulator-5554',
    appPackage: 'es.monkimun.lingokids',
    appActivity: 'es.monkimun.lingokids.MainActivity',
    appWaitDuration: 80000,
    fullReset: true,
    language: process.env.LANGUAGE,
    locale: process.env.COUNTRY,
    uiautomator2ServerLaunchTimeout: 60000,
    uiautomator2ServerInstallTimeout: 60000,
    androidInstallTimeout: 600000,
    remoteAppsCacheLimit: 0,
    newCommandTimeout: 450,
};