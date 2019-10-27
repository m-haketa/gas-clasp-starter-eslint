//既存型の修正をする

/* eslint-disable @typescript-eslint/no-explicit-any */
interface Array<T> {
  fill(value?: any, start?: number | undefined, end?: number | undefined): T[];
}
