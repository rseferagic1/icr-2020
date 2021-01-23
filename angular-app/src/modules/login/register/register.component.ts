import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
  accForm;
  contactForm;
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: null,
      lastName: null,
      address: null,
      city: null,
      zip: null,
      country: "Bosna i Hercegovina",
      email: null,
      phoneNumber: null,
      tagNumbers: null
    });
      this.contactForm = this.formBuilder.group({
      username: null,
      password: null,
      confirmPassword: [null]
    });
    this.accForm =  new FormGroup({
      accs: new FormArray([
        new FormControl('', Validators.required),
      ])
    });
  }
  
  get accs(): FormArray {
    return this.accForm.get('accs') as FormArray;
  }
  onFormSubmit(): void {
    for (let i = 0; i < this.accs.length; i++) {
      console.log(this.accs.at(i).value);
    }
  }
  addNameField() {
    this.accs.push(new FormControl('', Validators.required));
  }

  deleteNameField(index: number) {
    if (this.accs.length !== 1) {
      this.accs.removeAt(index);
    }
    console.log(this.accs.length);
  }
  validirajIDrugiKorak(stepper) {
    this.registerForm.updateValueAndValidity();
    if (this.registerForm.valid) {
      stepper.next();
    }
  }
  validirajITreciKorak(stepper) {
    this.accForm.updateValueAndValidity();
    if (this.accForm.valid) {
      stepper.next();
    }
  }
  validirajIZavrsi() {
    this.contactForm.updateValueAndValidity();
    if (this.contactForm.valid) {
      this.router.navigate(['/in/pocetna']);
    }
  }

  redirect() {
    this.router.navigate(['/login']);
  }

}
