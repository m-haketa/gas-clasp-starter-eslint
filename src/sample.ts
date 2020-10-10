function sum(a: number, b: number): number {
  return a + b;
}

const modifyExistingTypeTest = (): void => {
  const s = SpreadsheetApp.getActiveSheet();

  //引数なしでfillが使えるように型定義を変更
  const data = Array(10)
    .fill()
    .map(() => Array(5).fill(0));

  s.getRange(2, 2, data.length, data[0].length).setValues(data);

  s.getRange(20, 10, 2, 3).setValues([
    ['a', 1, 1],
    ['b', 2, 2],
  ]);

  //getValues、getValueに、列ごとに型を指定できるように型定義を変更
  const values = s.getRange(20, 10, 2, 3).getValues<[string, number, number]>();

  //console.logでnumber型なども受け付けるように型定義を変更
  console.log(values[0][0]);
  console.log(values[0][1]);
};

const BetterLogTest = (): void => {
  const Logger = BetterLog.useSpreadsheet();

  Logger.log('BetterLogでログ出力');
};

export { sum, modifyExistingTypeTest, BetterLogTest };
