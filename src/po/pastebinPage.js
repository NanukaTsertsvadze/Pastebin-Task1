class PastebinPage {
    get input() { return $('#postform-text'); }
    get expirationDropdown() { return $('#select2-postform-expiration-container'); }
    get expirationOption() { return $('//li[text()="10 Minutes"]'); }
    get nameInput() { return $('#postform-name'); }
    get submitButton() { return $('//button[text()="Create New Paste"]'); }

    open() {
        browser.url('https://pastebin.com');
    }
}

module.exports =  PastebinPage;
