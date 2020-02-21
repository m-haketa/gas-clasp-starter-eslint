//既存型の修正をする

/* eslint-disable @typescript-eslint/no-explicit-any */
interface Array<T> {
  fill(value?: any, start?: number, end?: number): this;
}

declare namespace GoogleAppsScript {
  export namespace Spreadsheet {
    export interface Range {
      // 返り値に型を付けられるように修正
      getValue<U = any>(): U;

      // 返り値に型（配列、または、タプル型）を付けられるように修正
      getValues<U extends any[] = any[]>(): U[];
    }
  }
  export namespace Base {
    // eslint-disable-next-line @typescript-eslint/class-name-casing
    interface console {
      error(formatOrObject: any): void;
      info(formatOrObject: any): void;
      log(formatOrObject: any): void;
      warn(formatOrObject: any): void;
    }
  }
}
