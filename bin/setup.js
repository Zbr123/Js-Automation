const wd = require('wd');
const appiumServers = require('./servers')[process.env.PLATFORM];
const translationsData = require('./translations');

const newDriver = wd.promiseChainRemote(appiumServers.host, appiumServers.port);

const translationsInfo = translationsData.data;
global.translations = translationsInfo[process.env.COUNTRY][process.env.LANGUAGE].app;

module.exports = { newDriver, translationsInfo };