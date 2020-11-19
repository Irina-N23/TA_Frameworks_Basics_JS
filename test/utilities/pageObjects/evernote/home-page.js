"use strict";

const Page = require("../base-page");
const Element = require("./../base-element");


class HomePage extends Page {
    constructor() {
        super();
        this.URL = "https://evernote.com/";
        this.loginButton = new Element("Login Button", by.xpath("//div[@class="
                                               + "'top']//a[text()='Log In']"));
    }

    openPage() {
        return super.openPage(this.URL);
    }

    getTitleOfPage() {
        return super.getTitleOfPage();
    }
}

module.exports = HomePage;