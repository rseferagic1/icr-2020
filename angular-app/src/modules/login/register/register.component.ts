import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
    private router: Router) { }
  registerForm;
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: null,
      lastName: null,
      address: null,
      city: null,
      zip: null,
      country: null,
      email: null,
      phoneNumber: null,
      tagNumbers: null,
      username: null,
      password: null,
      confirmPassword: [null]
    })
  }

  redirect() {
    this.router.navigate(['/login']);
  }

}
