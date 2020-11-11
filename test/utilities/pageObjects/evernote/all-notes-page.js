"use strict";

const BasePage = require("../base-page");
const Element = require("./../base-element");
const EC = protractor.ExpectedConditions;


class AllNotesPage extends BasePage {
    constructor() {
        super();
        this.authorizedEmailLink = new Element("Authorized Email Link",
                                              by.xpath("//div[text()="
                                              + "'sometestuserqa@gmail.com']"));
        this.searchField = new Element("Search Field", by
                                              .css("#qa-SEARCH_INPUT_INITIAL"));
        this.searchResults = new Element("Search Results", by.id("qa-SEARCH"
                                        + "_RESULTS_TOTAL_NOTECOUNT"));
        this.editorIFrame = new Element("Editor iFrame", by.id("qa-COMMON"
                                       + "_EDITOR_IFRAME"));
        this.todayCheckbox = new Element("Checkbox of Today's Note",
                                        by.xpath("//b[text()='Today']/../"
                                        + "following-sibling::ul[1]//input"));
        this.checkedTodayCheckbox = new Element("Checkbox of Today's Note In a "
                                               + "Checked State", by.xpath("//li"
                                               +"[@data-checked='true']"));
        this.tomorrowField = new Element("Field of Tomorrow's Note", by
                                        .xpath("//b[text()='Tomorrow']/../"
                                         + "following-sibling::ul[1]"
                                         + "//div[@class='para']"));
        this.changedTomorrowField = new Element("Field of Tomorrow's Note Filled "
                                    + "With Italic-styled Text", by.xpath("//b"
                                    + "[text()='Tomorrow']/../following-sibling"
                                    + "::ul[1]//div[@class='para']/i"));
    }

    async switchToEditorIFrame() {
        browser.wait(EC.visibilityOf(this.editorIFrame.element), 30000);
        return browser.switchTo().frame(this.editorIFrame.element.getWebElement());
    }
}

module.exports = AllNotesPage;