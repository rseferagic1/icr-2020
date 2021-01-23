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
  title = '';
  menuItems = [{name: 'Početna', icon: 'dashboard'},{name: 'Dopuni kredit', icon: 'credit_card'},
  {name: 'Pregled ruta', icon: 'alt_route'},{name: 'Historija računa', icon: 'history'}]
  ngOnInit() {
    this.loggedInUser = this.userservice.getLoggedInUser();
    if (this.isactive("pocetna")) {
      this.title = "Početna stranica";
    }  else if (this.isactive("dopuni-kredit")) {
      this.title = "Dopuni kredit";
    } else if (this.isactive("historija")) {
      this.title = "Historija korisničkog računa"
    } else if (this.isactive("pregled-ruta")) {
      this.title = "Pretraga ruta"
    }
    
  }
  
  isactive(item) {
    return this.router.url.indexOf(item) !== -1;
  }

  redirectTo(itemName) {
    switch(itemName) {
      case "Početna": 
        this.title = "Početna stranica";
        this.router.navigate(['/in/pocetna']);
        break;
      case "Dopuni kredit": 
        this.title = "Dopuni kredit";
        this.router.navigate(['/in/dopuna']);
        break;
      case "Pregled ruta": 
        this.title = "Pretraga ruta";
        this.router.navigate(['/in/pregled-ruta']);
        break;
      case "Historija računa": 
        this.title = "Historija korisničkog računa";
        this.router.navigate(['/in/historija']);
        break;
      default:
        this.title = "Početna stranica";
        this.router.navigate(['/in/pocetna']);
        break;
    }
  }

}
