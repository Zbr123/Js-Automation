const wd = require('wd');
const AWS = require('aws-sdk');

AWS.config.update({
  region: 'eu-west',
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

const appiumServers = require('./servers')[process.env.PLATFORM];
const translationsData = require('./translations');

const newDriver = wd.promiseChainRemote(appiumServers.host, appiumServers.port);

const translationsInfo = translationsData.data;
global.translations = translationsInfo[process.env.COUNTRY][process.env.LANGUAGE].app;

module.exports = { newDriver, translationsInfo };