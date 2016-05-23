import { BasePage, LoginPage } from './app.po';

describe('base App', () => {
  let page: BasePage;

  beforeEach(() => {
    page = new BasePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    //expect(page.getParagraphText()).toEqual('base works!');
  });
});

describe('base Login', () => {
  let page: LoginPage;

  beforeEach(() => {
    page = new LoginPage();
  });

  it('should contain a login box', () => {
    page.navigateTo();
    expect(page.getLoginTitle()).toEqual('Login');
  });

});
