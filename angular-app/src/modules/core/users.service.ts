import { Injectable } from '@angular/core';
import { TagInfo } from 'src/models/tag-info';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

  lowerBound = '10';
  users = [{username: "Test", password: "Test"}];
  loggedInUser = null;

  setLoggedInUser(user) {
    this.loggedInUser = user;
  }
  getLoggedInUser() {
    return this.loggedInUser;
  }
  canLogin(username, password) {
    if (this.users.find(x => x.username == username && x.password == password)) return true;
    return false;
  }

  getBalance() {
    return '18.90';
  }
  getUserInfo() {
    return {name: 'Ičr Test', company: '', address: 'Džemala Bijedića 23', city: 'Sarajevo',
  zip: '71000', state: 'Bosna i Hercegovina', phoneNumber: '0038762X55X9X', email: 'admin1@etf.unsa.ba',
  registeredDate: '10.10.2019.'}
  }

  getTagInfo() {
    let zaVratiti = new Array<TagInfo>();
    zaVratiti.push({id: '1230 2675 1884', naziv: 'Moj prvi tag', datumAktivacije: '16/3/2020'});
    return zaVratiti;
  }
  setLowerBound(val) {
    this.lowerBound = val;
  }
  getLowerBound() {
    return this.lowerBound;
  }
}
