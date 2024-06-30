const { expect, browser, $ } = require('@wdio/globals');
const PastebinPage = require('../../src/po/pastebinPage');

const pastebin = new PastebinPage();

describe('Test Suite 1', () => {
    it('should create New Paste', async () => {
        await pastebin.open();
        await pastebin.input.setValue('Hello from WebDriver');
        await pastebin.expirationDropdown.click();
        await pastebin.expirationOption.click();
        await pastebin.nameInput.setValue('helloweb');
        await pastebin.submitButton.click();
    })
})

