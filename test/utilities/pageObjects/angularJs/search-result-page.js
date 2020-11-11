"use strict";

const BasePage = require("../base-page");
const Element = require("../base-element");


class SearchResultPage extends BasePage {
    constructor() {
        super();
        this.foundPageTitle = new Element("Title of Found Page",
                                         by.xpath("//h1[text()='ngBindHtml']"));
        this.hideButton = new Element("Hide Button",
                                      by.xpath("//button[text()='Hide']"));
        this.showButton = new Element("Show Button",
                                      by.xpath("//button[text()='Show']"));
        this.versionDropdown = new Element("Version Dropdown Menu",
                                           by.model("$ctrl.selectedVersion"));
        this.VERSION = "1.6.10";
        this.versionToChooseButton = new Element(`Button with version `
                                        + `${this.VERSION}`,
                                        by.xpath(`//optgroup[@label='Latest']//`
                                        + `option[@label='v${this.VERSION}']`));
    }
}

module.exports = SearchResultPage;