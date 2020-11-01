const columnTypeToData = {
  string: '',
  number: 0,
  boolean: false,
  Date: new Date(1900, 0, 1),
};

type ColumnTypeToData = typeof columnTypeToData;
type ColumnType = keyof ColumnTypeToData;

type GetColumnType<T extends ColumnType[]> = {
  [K in keyof T]: T[K] extends keyof ColumnTypeToData
    ? ColumnTypeToData[T[K]]
    : never;
};

export const setColumnType = <T extends ColumnType[]>(
  ...ColumnTypes: T
): { toValues: (values: Cell[][]) => GetColumnType<T>[] } => ({
  toValues: (values: Cell[][]): GetColumnType<T>[] => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return values.map((row) => {
      if (row.length > ColumnTypes.length) {
        throw new Error(
          'setColumnType: データの列数がColumnTypesの列数を超えています'
        );
      }

      const rowCloned = [...row];
      while (rowCloned.length < ColumnTypes.length) {
        rowCloned.push('');
      }

      return rowCloned.map((value, i) => {
        if (value === '') {
          return columnTypeToData[ColumnTypes[i]];
        } else if (ColumnTypes[i] === 'string') {
          return String(value);
        } else if (ColumnTypes[i] === 'number') {
          return Number(value);
        } else if (ColumnTypes[i] === 'boolean') {
          return Boolean(value);
        } else if (ColumnTypes[i] === 'Date') {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          return value instanceof Date ? value : new Date(value as any);
        }
      });
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    }) as any;
  },
});

const values = [
  ['abc', 100, true, new Date(2020, 1, 3)],
  ['', '', '', ''],
  ['cde', 200, false],
];

//使用例
//const data = setColumnType('string', 'number', 'boolean', 'Date').toValues(
//  values
//);
