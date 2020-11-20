"use strict";

const BasePage = require("../base-page");
const Element = require("../base-element");


class HomePage extends BasePage {
    constructor() {
        super();
        this.HOME_URL = "https://angularjs.org/";

        this.learnButton = new Element("Learn Button",
                                       by.xpath("//a[text()='Learn']"));
        this.tutorialLink = new Element("Tutorial Link", by.xpath("//a[text()="
                                        + "'Tutorial']"));
    }

    openPage() {
        return super.openPage(this.HOME_URL);
    }

    getTitleOfPage() {
        return super.getTitleOfPage();
    }
}

module.exports = HomePage;