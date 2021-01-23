import { Injectable } from '@angular/core';
import { TagInfo } from 'src/models/tag-info';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

  lowerBound = '10';
  users = [{username: "Test", password: "Test"}];
  loggedInUser = 'Test';

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
    zaVratiti.push({id: '1230 2675 1884', naziv: 'Moj prvi tag', auto: 'Toyota Yaris', stanje: '36.20KM', regBroj: 'A97-M-097', datumAktivacije: '16/3/2020'});
    zaVratiti.push({id: '2589 2614 1674', naziv: 'Moj drugi tag', auto: 'Seat Toledo', stanje: '15.10KM', regBroj: 'A99-M-086',  datumAktivacije: '23/9/2020'});
    zaVratiti.push({id: '8872 2123 9821', naziv: 'A3 Tag', auto: 'Audi A3',  stanje: '12.50KM', regBroj: 'J33-E-112',  datumAktivacije: '23/11/2020'});
    zaVratiti.push({id: '9981 3292 1221', naziv: 'A4 Tag', auto: 'Audi A4', stanje: '56.00KM',  regBroj: 'K13-J-419',  datumAktivacije: '12/12/2020'});

    return zaVratiti;
  }
  setLowerBound(val) {
    this.lowerBound = val;
  }
  getLowerBound() {
    return this.lowerBound;
  }
  getUser1History() {
    return [
      {
        naziv: 'Uplata',
        datum: '11/04/2020',
        iznos: '20.00KM',
        broj: '1230 2675 1884',
        ulaz: '-',
        izlaz: '-',
        vrijemeUl: '-',
        vrijemeIz: '-'
      },  
      {
        naziv: 'Uplata',
        datum: '12/04/2020',
        iznos: '15.00KM',
        broj: '9981 3292 1221',
        ulaz: '-',
        izlaz: '-',
        vrijemeUl: '-',
        vrijemeIz: '-'
      },  
      {
        naziv: 'Naplata autoceste',
        datum: '16/04/2020',
        iznos: '2.50KM',
        broj: '2589 2614 1674',
        ulaz: 'Sarajevo - Zapad',
        izlaz: 'Tarčin',
        vrijemeUl: '16:40',
        vrijemeIz: '17:35'
      },
      {
        naziv: 'Naplata autoceste',
        datum: '17/04/2020',
        iznos: '2.50KM',
        broj: '9981 3292 1221',
        ulaz: 'Tarčin',
        izlaz: 'Sarajevo - Zapad',
        vrijemeUl: '13:52',
        vrijemeIz: '14:16'
      },
      
      {
        naziv: 'Naplata autoceste',
        datum: '19/04/2020',
        iznos: '2.50KM',
        broj: '2589 2614 1674',
        ulaz: 'Sarajevo - Zapad',
        izlaz: 'Tarčin',
        vrijemeUl: '16:40',
        vrijemeIz: '17:35'
      },
      {
        naziv: 'Uplata',
        datum: '21/06/2020',
        iznos: '10.00KM',
        broj: '1230 2675 1884',
        ulaz: '-',
        izlaz: '-',
        vrijemeUl: '-',
        vrijemeIz: '-'
      },
      {
        naziv: 'Naplata autoceste',
        datum: '10/07/2020',
        iznos: '4.00KM',
        broj: '2589 2614 1674',
        ulaz: 'Sarajevo - Sjever',
        izlaz: 'Kakanj',
        vrijemeUl: '14:56',
        vrijemeIz: '15:49'
      },
      {
        naziv: 'Naplata autoceste',
        datum: '10/07/2020',
        iznos: '3.50KM',
        broj: '2589 2614 1674',
        ulaz: 'Kakanj II',
        izlaz: 'Zenica - Sjever',
        vrijemeUl: '18:12',
        vrijemeIz: '19:18'
      },
      {
        naziv: 'Naplata autoceste',
        datum: '07/07/2020',
        iznos: '4.00KM',
        broj: '1230 2675 1884',
        ulaz: 'Sarajevo - Sjever',
        izlaz: 'Kakanj',
        vrijemeUl: '14:56',
        vrijemeIz: '15:49'
      },
      {
        naziv: 'Naplata autoceste',
        datum: '07/07/2020',
        iznos: '3.50KM',
        broj: '1230 2675 1884',
        ulaz: 'Kakanj II',
        izlaz: 'Zenica - Sjever',
        vrijemeUl: '18:12',
        vrijemeIz: '19:18'
      },
      {
        naziv: 'Uplata',
        datum: '18/10/2020',
        iznos: '5.00KM',
        broj: '1230 2675 1884',
        ulaz: '-',
        izlaz: '-',
        vrijemeUl: '-',
        vrijemeIz: '-'
      },
      {
        naziv: 'Uplata',
        datum: '01/01/2020',
        iznos: '25.00KM',
        broj: '8872 2123 9821',
        ulaz: '-',
        izlaz: '-',
        vrijemeUl: '-',
        vrijemeIz: '-'
      },
      {
        naziv: 'Naplata autoceste',
        datum: '07/07/2020',
        iznos: '3.50KM',
        broj: '8872 2123 9821',
        ulaz: 'Kakanj II',
        izlaz: 'Zenica - Sjever',
        vrijemeUl: '18:12',
        vrijemeIz: '19:18'
      },
    ];
  }
}
