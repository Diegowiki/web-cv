import { browser, by, element } from 'protractor';

export class CvWebPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('dct-root h1')).getText();
  }
}
