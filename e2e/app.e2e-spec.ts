import { Project5MarscolonyPage } from './app.po';

describe('project5-marscolony App', function() {
  let page: Project5MarscolonyPage;

  beforeEach(() => {
    page = new Project5MarscolonyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
