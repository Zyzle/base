export class BasePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('base-app h1')).getText();
  }
}
