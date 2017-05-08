import { NgSnotifyPage } from './app.po';

describe('ng-snotify App', () => {
  let page: NgSnotifyPage;

  beforeEach(() => {
    page = new NgSnotifyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
