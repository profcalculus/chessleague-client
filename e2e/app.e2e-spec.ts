import { ChessleagueClientPage } from './app.po';

describe('chessleague-client App', () => {
  let page: ChessleagueClientPage;

  beforeEach(() => {
    page = new ChessleagueClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
