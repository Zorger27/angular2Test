import { AngularAppLessonPage } from './app.po';

describe('angular-app-lesson App', function() {
  let page: AngularAppLessonPage;

  beforeEach(() => {
    page = new AngularAppLessonPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
