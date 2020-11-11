"use strict";

const BasePage = require("../base-page");
const Element = require("../base-element");


class TutorialPage extends BasePage {
    constructor() {
        super();
        this.searchField = new Element("Search Field", by.model('q'));
        this.searchResultsContainer = new Element("Search Results Container",
                                      by.xpath("//div[@ng-show='hasResults']"));
    }
}

module.exports = TutorialPage;