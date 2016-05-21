import { BasePage } from './app.po';

describe('base App', function() {
  let page: BasePage;

  beforeEach(() => {
    page = new BasePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('base works!');
  });
});
