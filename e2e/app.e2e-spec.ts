import { CvWebPage } from './app.po';

describe('cv-web App', () => {
  let page: CvWebPage;

  beforeEach(() => {
    page = new CvWebPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to dct!');
  });
});
