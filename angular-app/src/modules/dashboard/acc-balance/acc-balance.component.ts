import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/modules/core/users.service';

@Component({
  selector: 'app-acc-balance',
  templateUrl: './acc-balance.component.html',
  styleUrls: ['./acc-balance.component.scss']
})
export class AccBalanceComponent implements OnInit {

  constructor(
    private userService: UsersService
  ) { }

  date;
  balance;
  ngOnInit() {
    this.date = new Date();
    this.balance = this.userService.getBalance();
  }

}
