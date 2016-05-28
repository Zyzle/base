import {ElementFinder} from 'protractor';

export class LoginPage {

  loginBox:ElementFinder = element(by.css('app-login'));
  loginBoxToolbar:ElementFinder = element(by.css('app-login md-toolbar'))

  navigateTo() {
    return browser.get('/login');
  }

  getLoginTitle() {
    return this.loginBoxToolbar.getText();
  }
}
