import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/modules/core/users.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {

  constructor(
    private userService: UsersService
  ) { }
  
  displayedColumns: string[] = ['name', 'address', 'phoneNumber', 'email'];
  userInfo;
  ngOnInit() {
    this.userInfo = this.userService.getUserInfo();
    
  }

}
