import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/modules/core/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm;
  badcred = false;
  constructor(
    private formBuilder: FormBuilder,
    private userService: UsersService,
    private router: Router
  ) { }


  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: null,
      password: null
    })
  }
  login() {
    this.badcred=false;
    if (this.userService.canLogin(this.loginForm.value.username, this.loginForm.value.password)) {
      this.router.navigate(['in/pocetna']);
      this.userService.setLoggedInUser(this.loginForm.value.username);
    }
    else this.badcred = true;
  }

}
