export class BasePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('base-app h1')).getText();
  }
}

export class LoginPage {
  navigateTo() {
    return browser.get('/login');
  }

  getLoginTitle() {
    return element(by.css('app-login md-toolbar')).getText();
  }
}
