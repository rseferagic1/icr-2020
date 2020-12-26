import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

  getLoggedInUser() {
    return "Admin Admin";
  }
}
