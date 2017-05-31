import { Ng2SnotifyPage } from './app.po';

describe('ng2-snotify App', () => {
  let page: Ng2SnotifyPage;

  beforeEach(() => {
    page = new Ng2SnotifyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
