import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-icr-app',
  templateUrl: './icr-app.component.html',
  styleUrls: ['./icr-app.component.scss']
})
export class IcrAppComponent implements OnInit {

  isLoggedIn = false;
  constructor(private userService: UsersService) { }

  ngOnInit() {
    this.isLoggedIn = this.userService.getLoggedInUser() != null;
  }

}
