"use strict";

const BasePage = require("../base-page");
const Element = require("./../base-element");


class LoginPage extends BasePage {
    constructor() {
        super();
        this.emailField = new Element("Email Field", by.css("#username"));
        this.passwordField = new Element("Password Field", by.css("#password"));
    }
}

module.exports = LoginPage;