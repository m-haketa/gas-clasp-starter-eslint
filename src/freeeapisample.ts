//clientID、clientSecretで書き換えてください
const clientId = 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
const clientSecret = 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';

//ログを取る必要がない場合には、最後の引数を消してください
//例： const freeeapi = new FreeeApiGasHelper.FreeeApi(clientId, clientSecret);
const freeeapi = new FreeeApiGasHelper.FreeeApi(
  clientId,
  clientSecret,
  BetterLog.useSpreadsheet()
);

export const authCallback = function (
  request: unknown
): GoogleAppsScript.HTML.HtmlOutput {
  return freeeapi.authCallback(request);
};

export function login(): void {
  freeeapi.login();
}

export function logout(): void {
  freeeapi.logout();
}

export function getCompanies(): void {
  const companiesRoot = freeeapi.request<
    | {
        companies: { id: string; display_name: string }[];
      }
    | { errors: unknown }
  >('get', '/api/1/companies');

  if ('companies' in companiesRoot) {
    const data = companiesRoot.companies.map((row) => [
      row.id,
      row.display_name,
    ]);
    data.unshift(['id', '会社名']);

    const ss = SpreadsheetApp.getActiveSpreadsheet().insertSheet();
    ss.getRange(1, 1, data.length, data[0].length).setValues(data);
  }
}

// company_id、idを書き換えて実行してください
export function getWallet(): void {
  const walletRoot = freeeapi.request<
    | {
        walletable: { id: string; name: string; bank_id: string };
      }
    | { errors: unknown }
  >('get', '/api/1/walletables/{type}/{id}', {
    id: '123456', // ※要書き換え
    type: 'credit_card',
    company_id: 1234567, // ※要書き換え
  });

  if ('errors' in walletRoot) {
    const Logger = BetterLog.useSpreadsheet();
    Logger.log('口座が存在しません' + JSON.stringify(walletRoot));
    throw 'エラーが発生しました';
  }

  const wallet = walletRoot.walletable;
  const data = [
    ['id', '口座名', 'bankid'],
    [wallet.id, wallet.name, wallet.bank_id],
  ];

  const ss = SpreadsheetApp.getActiveSpreadsheet().insertSheet();
  ss.getRange(1, 1, data.length, data[0].length).setValues(data);
}

// company_idを書き換えて実行してください
export function postPartner(): void {
  const partnerRoot = freeeapi.request('post', '/api/1/partners', {
    company_id: 1234567, //※要書き換え
    name: 'テスト取引先',
  });

  const Logger = BetterLog.useSpreadsheet();
  Logger.log('取引先登録を行いました：' + JSON.stringify(partnerRoot));
}
