"use strict";

const {expect} = require("chai");
const {email, password} = require("../utilities/evernoteUserCredentials"
                                  + "/user-credentials.json");
const {Key} = require("protractor");

const HomePage = require("../utilities/pageObjects/evernote/home-page");
const LoginPage = require("../utilities/pageObjects/evernote/login-page");
const AllNotesPage = require("../utilities/pageObjects/evernote/all-notes-page");
const homePage = new HomePage();
const loginPage = new LoginPage();
const allNotesPage = new AllNotesPage();


describe("An Evernote scenario", () => {
    before(() => browser.waitForAngularEnabled(false));
    after(() => browser.close());


    it("should open Evernote homepage", async () => {
        await homePage.openPage();
        const pageTitle = await homePage.getTitleOfPage();
        expect(pageTitle).to.include("Organize Your Notes with Evernote");
    });


    it("should log in to user's account", async () => {
        await homePage.loginButton.clickOn();
        await loginPage.emailField.inputText(email, Key.ENTER);
        await loginPage.passwordField.inputText(password, Key.ENTER);
        const emailLinkText = await allNotesPage.authorizedEmailLink
                                                          .getTextFromElement();
        expect(emailLinkText).to.be.eql(email);
    });


    it("should find a chosen note", async () => {
        await allNotesPage.searchField.inputText("To-Do", Key.ENTER);
        const foundResults = await allNotesPage.searchResults
                                                          .getTextFromElement();
        await browser.executeScript("console.log(`Search results are "
                                     + "\"${arguments[0]}\".`);", foundResults);
        expect(foundResults).to.be.eql("1 note found");
    });


    it("should mark today's task as done", async () => {
        await allNotesPage.switchToEditorIFrame();
        await allNotesPage.todayCheckbox.clickOn();
        await allNotesPage.tomorrowField.clickOn();
        const isPresent = await browser.isElementPresent(allNotesPage
                                                 .checkedTodayCheckbox.locator);
        expect(isPresent).to.be.true;
    });


    it("should write a todo for tomorrow", async () => {
        await allNotesPage.tomorrowField.inputText("meeting!");
        const textFromField = await allNotesPage.tomorrowField
                                                          .getTextFromElement();
        expect(textFromField).to.be.eql("meeting!");
    });
});