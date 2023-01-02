import { browser, element, by } from 'protractor';

describe('Jewellery Store', () => {
  beforeEach(() => browser.get('/'));

  it('should display "Jewellery Store"', async () => {
    const title = await element(by.css('app-root h1')).getText();
    expect(title).toEqual('Jewellery Store');
  });
});
