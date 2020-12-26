import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

  getLoggedInUser() {
    return "Admin Admin";
  }

  getBalance() {
    return '18.90';
  }
  getUserInfo() {
    return {name: 'Admin Admin', company: '', address: 'Džemala Bijedića 23', city: 'Sarajevo',
  zip: '71000', state: 'Bosna i Hercegovina', phoneNumber: '0038762X55X9X', email: 'admin1@etf.unsa.ba',
  registeredDate: '10.10.2019.'}
  }
}
