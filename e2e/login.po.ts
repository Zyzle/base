export class LoginPage {
  navigateTo() {
    return browser.get('/login');
  }

  getLoginTitle() {
    return element(by.css('app-login md-toolbar')).getText();
  }
}
