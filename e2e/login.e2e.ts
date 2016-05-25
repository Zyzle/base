import { LoginPage } from './login.po';

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
