import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  constructor(
    private userservice: UsersService,
    private router: Router
  ) { }

  loggedInUser: string;
  menuItems = [{name: 'Početna', icon: 'dashboard'},{name: 'Dopuni kredit', icon: 'credit_card'},
  {name: 'Pregled ruta', icon: 'alt_route'},{name: 'Historija računa', icon: 'history'}]
  ngOnInit() {
    this.loggedInUser = this.userservice.getLoggedInUser();
  }

  redirectTo(itemName) {
    switch(itemName) {
      case "Početna": 
        this.router.navigate(['/in/pocetna']);
        break;
      case "Dopuni kredit": 
        this.router.navigate(['/in/dopuna']);
        break;
      case "Pregled ruta": 
        this.router.navigate(['/in/pregled-ruta']);
        break;
      case "Historija računa": 
        this.router.navigate(['/in/historija']);
        break;
      default:
        this.router.navigate(['/in/pocetna']);
        break;
    }
  }

}
