"use strict";

const {expect} = require("chai");
const {Key} = require("protractor");

const HomePage = require("../utilities/pageObjects/angularJs/home-page");
const SearchResultPage = require("../utilities/pageObjects/angularJs/"
                                                         + "search-result-page");
const TutorialPage = require("../utilities/pageObjects/angularJs/tutorial-page");
const homePage = new HomePage();
const tutorialPage = new TutorialPage();
const searchResultsPage = new SearchResultPage();


describe("An AngularJS website scenario", () => {
    before(() => browser.waitForAngularEnabled(true));
    after(() => browser.close());


    it("should open AngularJS homepage", async () => {
        await homePage.openPage();
        const titleOfPage = await homePage.getTitleOfPage();
        expect(titleOfPage).to.include("AngularJS");
    });


    it("should go to Tutorial page", async () => {
        await homePage.learnButton.clickOn();
        await homePage.tutorialLink.clickOn();
        const tutorialUrl = await homePage.getCurrentUrl();
        expect(tutorialUrl).to.be.eql("https://docs.angularjs.org/tutorial");
    });


    it("should find an article \"ngBindHtml\"", async () => {
        await tutorialPage.searchField.inputText("ngBindHtml");
        await tutorialPage.ngBindHtmlLink.clickOn();
        const pageTitle = await searchResultsPage.foundPageTitle
                                                          .getTextFromElement();
        expect(pageTitle).to.include("ngBindHtml");
    });


    it("should hide content of the article \"ngBindHtml\"", async () => {
        await searchResultsPage.hideButton.clickOn();
        const textOfButton = await searchResultsPage.showButton
                                                          .getTextFromElement();
        expect(textOfButton).to.be.eql("Show");
    });


    it("should go to page of a chosen version of AngularJS", async () => {
        await searchResultsPage.versionDropdown.clickOn();
        await browser.executeScript("arguments[0].style.border='2px solid red'",
                                     searchResultsPage.versionDropdown.element);
        await searchResultsPage.versionToChooseButton.clickOn();
        const currentUrl = await searchResultsPage.getCurrentUrl();
        expect(currentUrl).to.include(searchResultsPage.VERSION);
    });
});