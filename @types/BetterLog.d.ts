// "userSymbol": "BetterLog",
// "libraryId": "1DSyxam1ceq72bMHsE6aOVeOl94X78WCwiYPytKi7chlg4x5GqiNXSw0l",
// "version": "27"

// eslint-disable-next-line prettier/prettier
type LogLevel = 'OFF' | 'SEVERE' | 'WARNING' | 'INFO' | 'CONFIG' | 'FINE' | 'FINER' | 'FINEST'

/* eslint-disable @typescript-eslint/no-explicit-any */
declare class BetterLog {
  public static useSpreadsheet(
    optkey?: string,
    optSheetName?: string
  ): BetterLog;

  public static SHEET_MAX_ROWS: number;
  public static SHEET_LOG_CELL_WIDTH: number;
  public static SHEET_LOG_HEADER: any;
  public static DATE_TIME_LAYOUT: any;
  public static JSON_SPACES: number;

  public severe(message: any, ...optValues: any[]): BetterLog;
  public warning(message: any, ...optValues: any[]): BetterLog;
  public info(message: any, ...optValues: any[]): BetterLog;
  public config(message: any, ...optValues: any[]): BetterLog;
  public fine(message: any, ...optValues: any[]): BetterLog;
  public finer(message: any, ...optValues: any[]): BetterLog;
  public finest(message: any, ...optValues: any[]): BetterLog;
  public log(message: any, ...optValues: any[]): BetterLog;
  public setLevel(loglevel: LogLevel): BetterLog;
  public getLevel(): LogLevel;
}
