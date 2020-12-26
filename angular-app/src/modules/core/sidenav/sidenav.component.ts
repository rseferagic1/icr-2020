import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  constructor(
    private userservice: UsersService
  ) { }

  loggedInUser: string;
  menuItems = [{name: 'Dashboard', icon: 'dashboard'},{name: 'Add Credit', icon: 'credit_card'},
  {name: 'View Routes', icon: 'alt_route'},{name: 'Account History', icon: 'history'}]
  ngOnInit() {
    this.loggedInUser = this.userservice.getLoggedInUser();
  }

}
