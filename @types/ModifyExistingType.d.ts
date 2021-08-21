//既存型の修正をする
type Cell = string | number | boolean | Date;

interface JSON {
  parse<T>(
    text: string,
    reviver?: (this: any, key: string, value: any) => any
  ): T;
}

declare namespace GoogleAppsScript {
  export namespace Spreadsheet {
    export interface Range {
      // 返り値に型を付けられるように修正
      getValue<Cell>(): Cell;
      getValue<T>(): T;

      // 返り値に型（配列、または、タプル型）を付けられるように修正
      // Union Distributionが発生しないように、「T extends unknown[]」を
      // 同じ趣旨の「T[] extends unknown[][]」に変更
      getValues<T = Cell>(): T[] extends unknown[][] ? T[] : T[][];

      setValues(values: (readonly unknown[])[]): this;
    }
  }

  export namespace URL_Fetch {
    export interface UrlFetchApp {
      fetchAll(requests: readonly (URLFetchRequest | string)[]): HTTPResponse[];
    }
  }
}

interface Array<T> {
  fill(value?: T, start?: number, end?: number): this;
}
