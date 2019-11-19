//ログを取る必要がない場合には、引数なしで呼び出してください
//例： const freeeapi = new FreeeApiGasHelper.FreeeApi();
const freeeapi = new FreeeApiGasHelper.FreeeApi(BetterLog.useSpreadsheet());

//clientID、clientSecretで書き換えてください
const clientId = 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
const clientSecret = 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';

const authCallback = function(request: any): GoogleAppsScript.HTML.HtmlOutput {
  return freeeapi.authCallback(request, clientId, clientSecret);
};

function login(): void {
  freeeapi.login(clientId, clientSecret);
}

function logout(): void {
  freeeapi.logout();
}

function getCompanies(): void {
  const companiesRoot = freeeapi.request('get', '/companies');

  const data = (companiesRoot.companies as any[]).map(row => [
    row.id,
    row.display_name
  ]);
  data.unshift(['id', '会社名']);

  const ss = SpreadsheetApp.getActiveSpreadsheet().insertSheet();
  ss.getRange(1, 1, data.length, data[0].length).setValues(data);
}

// company_id、idを書き換えて実行してください
function getWallet(): void {
  const walletRoot = freeeapi.request('get', '/walletables/{type}/{id}', {
    id: '123456', // ※要書き換え
    type: 'credit_card',
    company_id: 1234567 // ※要書き換え
  });

  if (walletRoot.errors) {
    const Logger = BetterLog.useSpreadsheet();
    Logger.log('口座が存在しません' + JSON.stringify(walletRoot));
    throw 'エラーが発生しました';
  }

  const wallet = walletRoot.walletable;
  const data = [
    ['id', '口座名', 'bankid'],
    [wallet.id, wallet.name, wallet.bank_id]
  ];

  const ss = SpreadsheetApp.getActiveSpreadsheet().insertSheet();
  ss.getRange(1, 1, data.length, data[0].length).setValues(data);
}

// company_idを書き換えて実行してください
function postPartner(): void {
  const partnerRoot = freeeapi.request('post', '/partners', {
    company_id: 1234567, //※要書き換え
    name: 'テスト取引先'
  });

  const Logger = BetterLog.useSpreadsheet();
  Logger.log('取引先登録を行いました：' + JSON.stringify(partnerRoot));
}