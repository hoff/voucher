import { VoucherPage } from './app.po';

describe('voucher App', function() {
  let page: VoucherPage;

  beforeEach(() => {
    page = new VoucherPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
