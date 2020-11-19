"use strict";

const logger = require("../../config/logger-config");


class Page {
    constructor() {
        this.timeout = 40 * 1000;
    }

    openPage(url) {
        logger.info(`Opening page '${url}'.`);
        return browser.get(url, this.timeout);
    }

    async getCurrentUrl() {
        const currentUrl = await browser.getCurrentUrl();
        logger.info(`Receiving current URL...\nReceived URL: ${currentUrl}.`);
        return currentUrl;
    }

    async getTitleOfPage() {
        const titleOfPage = await browser.getTitle();
        logger.info(`Receiving title of current page...\n`
                    + `Received title of current page: '${titleOfPage}'.`);
        return titleOfPage;
    }

    wait(milliseconds) {
        logger.info(`Waiting ${milliseconds} milliseconds.`);
        return browser.sleep(milliseconds);
    }
}

module.exports = Page;