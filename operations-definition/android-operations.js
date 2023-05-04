const GeneralAppOperations = require('./general-app-operations');

module.exports = class AndroidOperations extends GeneralAppOperations {
  constructor() {
    super();
  }

  elementDisplayedBy(ele, time = 10000) {
    if (ele.includes('//')) return super.elementDisplayedByXPath(ele, time);
    if (ele.includes('com.') || ele.includes(':id')) return super.elementDisplayedById(ele, time);
    return super.elementDisplayedByAccessibilityId(ele, time);
  }

  clickBy(ele, time = 10000) {
    if (ele.includes('//')) return super.clickByXPath(ele, time);
    if (ele.includes('com.') || ele.includes(':id')) return super.clickById(ele, time);
    return super.clickByAccessibilityId(ele, time);
  }

  fillTextBy(ele, text, time = 20000) {
    if (ele.includes('//')) return super.fillTextByXPath(ele, text, time);
    if (ele.includes('com.') || ele.includes(':id')) return super.fillTextById(ele, text, time);
    return super.fillTextByAccessibilityId(ele, text, time);
  }

  getAttributeBy(ele, att, time = 10000) {
    if (ele.includes('//')) return super.getAttributeByXPath(ele, att, time);
    if (ele.includes('com.') || ele.includes(':id')) return super.getAttributeById(ele, att, time);
    return super.getAttributeByAccessibilityId(ele, att, time);
  }

  elementExist(ele, css, time = 10000) {
    return super.exist(ele, css, time);
  }

  getElementsBy(ele, time = 10000) {
    if (ele.includes('//')) return super.getElementsByXPath(ele, time);
    if (ele.includes('com.') || ele.includes(':id')) return super.getElementsById(ele, time);
    return super.getElementsByAccessibilityId(ele, time);
  }

  // move to methods
  moveTo(ele, dir) {
    return super.moveTo(ele, dir);
  }

  // getElementSize
  getElementSize(ele, time = 10000) {
    if (ele.includes('//')) return super.getSizeByXPath(ele, time);
    if (ele.includes('com.') || ele.includes(':id')) return super.getSizeById(ele, time);
    return super.getSizeByAccessibilityId(ele, time);
  }

  // getElementSize
  getElementLocation(ele, time = 10000) {
    if (ele.includes('//')) return super.getLocationByXPath(ele, time);
    if (ele.includes('com.') || ele.includes(':id')) return super.getLocationById(ele, time);
    return super.getLocationByAccessibilityId(ele, time);
  }
};