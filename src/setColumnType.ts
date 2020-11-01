export const setColumnType = <T extends Cell[]>(
  ...initialValues: T
): { values: (values: Cell[][]) => T[] } => {
  return {
    values: (values: Cell[][]): T[] => {
      return values.map((row) =>
        row.map((value, i) => {
          if (value === '') {
            return initialValues[i];
          } else if (typeof initialValues[i] === 'string') {
            return value.toString();
          } else if (typeof initialValues[i] === 'number') {
            return parseInt(value as any);
          } else if (typeof initialValues[i] === 'boolean') {
            return !!value;
          } else if (initialValues[i] instanceof Date) {
            return value instanceof Date ? value : new Date(value as any);
          }
          return initialValues[i];
        })
      ) as T[];
    },
  };
};

const values = [
  ['abc', 100, true, new Date(2020, 1, 3)],
  ['', '', '', ''],
];

const data = setColumnType('', 0, false, new Date()).values(values);
