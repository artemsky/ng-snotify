import { APage } from './app.po';

describe('a App', () => {
  let page: APage;

  beforeEach(() => {
    page = new APage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Ng-Snotify'))
      .then(done, done.fail);
  });
});
