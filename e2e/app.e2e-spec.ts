import { WebComponentsBffPage } from './app.po';

describe('web-components-bff App', () => {
  let page: WebComponentsBffPage;

  beforeEach(() => {
    page = new WebComponentsBffPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
