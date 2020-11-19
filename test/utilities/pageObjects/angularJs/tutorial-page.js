"use strict";

const BasePage = require("../base-page");
const Element = require("../base-element");


class TutorialPage extends BasePage {
    constructor() {
        super();
        this.searchField = new Element("Search Field", by.model('q'));
        this.ngBindHtmlLink = new Element("ngBindHtml Link",
                                    by.xpath("//h4/..//a[text()='ngBindHtml']"));
    }
}

module.exports = TutorialPage;