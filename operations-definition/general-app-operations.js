module.exports = class AppOperations {
  // * Click element
  clickByAccessibilityId(ele, time) {
    return driver.waitForElementByAccessibilityId(ele, time, `${ele} is not clickable`).elementByAccessibilityId(ele).click();
  }

  clickById(ele, time) {
    return driver.waitForElementById(ele, time, `${ele} is not clickable`).elementById(ele).click();
  }

  clickByXPath(ele, time) {
    return driver.waitForElementByXPath(ele, time, `${ele} is not clickable`).elementByXPath(ele).click();
  }

  // * Element displayed
  elementDisplayedById(ele, time) {
    return driver.waitForElementById(ele, time, `${ele} is not displayed`).elementById(ele).isDisplayed();
  }

  elementDisplayedByAccessibilityId(ele, time) {
    return driver.waitForElementByAccessibilityId(ele, time, `${ele} is not displayed`).elementByAccessibilityId(ele).isDisplayed();
  }

  elementDisplayedByXPath(ele, time) {
    return driver.waitForElementByXPath(ele, time, `${ele} is not displayed`).elementByXPath(ele).isDisplayed();
  }

  // Move to down
  moveTo(ele, dir) {
    return driver.moveToElement(ele, dir);
  }

  moveToExecuteUP() {
    return driver.execute('mobile: scroll', { direction: 'up' });
  }

  moveToExecuteDown() {
    return driver.execute('mobile: scroll', { direction: 'down' });
  }

  // Get attribute
  getAttributeByXPath(ele, att, time) {
    return driver.waitForElementByXPath(ele, time).elementByXPath(ele).getAttribute(att);
  }

  getAttributeById(ele, att, time) {
    return driver.waitForElementById(ele, time).elementById(ele).getAttribute(att);
  }

  getAttributeByAccessibilityId(ele, att, time) {
    return driver.waitForElementByAccessibilityId(ele, time).elementByAccessibilityId(ele).getAttribute(att);
  }

  // Fill text
  fillTextByAccessibilityId(ele, text, time) {
    return driver.waitForElementByAccessibilityId(ele, time).elementByAccessibilityId(ele).click().sendKeys(text)
      .hideDeviceKeyboard();
  }

  fillTextById(ele, text, time) {
    return driver.waitForElementById(ele, time).elementById(ele).click().sendKeys(text)
      .hideDeviceKeyboard();
  }

  async fillTextByXPath(ele, text, time) {
    await driver.waitForElementByXPath(ele, time).elementByXPath(ele).click().sendKeys(text);
    return driver.hideDeviceKeyboard();
  }

  // Element Exist
  exist(ele, css) {
    return driver.elementExist(ele, css);
  }

  // Get elements
  getElementsByXPath(ele) {
    return driver.elementsByXPath(ele);
  }

  getElementsById(ele) {
    return driver.elementsById(ele);
  }

  getElementsByAccessibilityId(ele) {
    return driver.elementsByAccessibilityId(ele);
  }

  // Element get Size
  getSizeByXPath(ele) {
    return driver.elementByXPath(ele).getSize();
  }

  getSizeById(ele) {
    return driver.elementById(ele).getSize();
  }

  getSizeByAccessibilityId(ele) {
    return driver.elementByAccessibilityId(ele).getSize();
  }

  // Element get Location
  getLocationByXPath(ele) {
    return driver.elementByXPath(ele).getLocation();
  }

  getLocationById(ele) {
    return driver.elementById(ele).getLocation();
  }

  getLocationByAccessibilityId(ele) {
    return driver.elementByAccessibilityId(ele).getLocation();
  }
};