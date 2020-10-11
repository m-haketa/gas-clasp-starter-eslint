import dayjs from 'dayjs';
import 'dayjs/Locale/ja';
import {
  login,
  logout,
  authCallback,
  getCompanies,
  getWallet,
  postPartner,
} from './freeeapisample';

global.main = function (): void {
  dayjs.locale('ja');

  console.log(dayjs('2018-08-08'));
  console.log(dayjs('2018-08-08').format());
  console.log(dayjs().format('{YYYY} MM-DDTHH:mm:ss SSS [Z] A')); // display
  console.log(dayjs().set('month', 3).month()); // get & set
  console.log(dayjs().add(1, 'year')); // manipulate
  console.log(dayjs().isBefore(dayjs())); // query
};

global.login = login;
global.logout = logout;
global.authCallback = authCallback;
global.getCompanies = getCompanies;
global.getWallet = getWallet;
global.postPartner = postPartner;
