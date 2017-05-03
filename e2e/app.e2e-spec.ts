import { ISSPage } from './app.po';

describe('iss App', () => {
  let page: ISSPage;

  beforeEach(() => {
    page = new ISSPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
