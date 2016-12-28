import { AkafliegUiPage } from './app.po';

describe('akaflieg-ui App', function() {
  let page: AkafliegUiPage;

  beforeEach(() => {
    page = new AkafliegUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
