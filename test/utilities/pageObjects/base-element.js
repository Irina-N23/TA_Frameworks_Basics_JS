"use strict";

const logger = require("../../config/logger-config");
const EC = protractor.ExpectedConditions;


class Element {
    constructor(name, locator) {
        this.name = name;
        this.locator = locator;
        this.element = element(locator);
    }

    TIMEOUT = 40000;

    async clickOn() {
        browser.wait(EC.visibilityOf(this.element), this.TIMEOUT);
        logger.info(`Clicking on '${this.name}'.`);
        return this.element.click();
    }

    async inputText(...keys) {
        browser.wait(EC.visibilityOf(this.element), this.TIMEOUT);
        logger.info(`Sending keys to '${this.name}'.`);
        await this.element.clear();
        await this.element.sendKeys(keys.join(""));
    }

    async getTextFromElement() {
        browser.wait(EC.presenceOf(this.element), this.TIMEOUT);
        const textFromElement = await this.element.getText();
        logger.info(`Receiving text from '${this.name}'...\n`
                    + `Received text: ${textFromElement}.`);
        return textFromElement;
    }
}

module.exports = Element;