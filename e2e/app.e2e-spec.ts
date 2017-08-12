import { Ng4SlidesShowPage } from './app.po';

describe('ng4-slides-show App', () => {
  let page: Ng4SlidesShowPage;

  beforeEach(() => {
    page = new Ng4SlidesShowPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
