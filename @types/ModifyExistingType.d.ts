//既存型の修正をする
type Cell = string | number | boolean | Date;

declare namespace GoogleAppsScript {
  export namespace Spreadsheet {
    export interface Range {
      // 返り値に型を付けられるように修正
      getValue<Cell>(): Cell;
      getValue<T>(): T;

      // 返り値に型（配列、または、タプル型）を付けられるように修正
      getValues<Cell>(): Cell[];
      getValues<T>(): T[];
    }
  }
}

interface Array<T> {
  fill(value?: T, start?: number, end?: number): this;
}
