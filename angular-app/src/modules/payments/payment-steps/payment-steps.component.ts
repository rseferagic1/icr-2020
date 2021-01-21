import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatOption } from '@angular/material';
import { UsersService } from 'src/modules/core/users.service';
import { PaymentConfirmedComponent } from '../payment-confirmed/payment-confirmed.component';

@Component({
  selector: 'app-payment-steps',
  templateUrl: './payment-steps.component.html',
  styleUrls: ['./payment-steps.component.scss']
})
export class PaymentStepsComponent implements OnInit {

  isLinear = true;
  savedPayments = {brojKartice: '123X XXXX XXXX X966', cvv: '123', ime: 'Test User', mjesec: '02', godina: '24'};
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  novoPlacanje: FormGroup;
  ureList = [];
  today = new Date();
  
  constructor(private _formBuilder: FormBuilder, 
    private userService: UsersService,
    public dialog: MatDialog) {}

  @ViewChild('allSelected') private allSelected: MatOption;
  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    return day !== 0 && day !== 6;
  }
  ngOnInit() {
    this.ureList =  this.userService.getTagInfo();
    this.firstFormGroup = this._formBuilder.group({
      accUredjaji: [[], Validators.required],
      iznos: [10],
      izborni: null,
      datumuplate: [new Date(), Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      placanje: ['', Validators.required]
    });
    this.novoPlacanje = this._formBuilder.group({
      brojKartice: ['', Validators.required],
      mjesec: ['', [Validators.required, Validators.pattern('^((0[1-9])|(1[0-2])|([1-9])){1}$')]],
      godina: ['', [Validators.required, Validators.pattern('^([2-5][1-9]){1}$')]],
      cvv: ['', Validators.required],
      ime: ['', Validators.required]
    });

    
  }

  getIznos() {
    if (this.firstFormGroup) {
    if (this.firstFormGroup.controls.iznos.value && this.firstFormGroup.controls.iznos.value !== "0" && this.firstFormGroup.controls.accUredjaji.value) {
      let iznos = Number.parseInt(this.firstFormGroup.controls.iznos.value) * this.firstFormGroup.controls.accUredjaji.value.toString().replace(',0', '').split(',').length;
      return iznos + ".00 KM";
    }
    else return this.firstFormGroup.controls.izborni.value;
  }
  }
  getAccs() {
    if (this.firstFormGroup && this.firstFormGroup.controls.accUredjaji.value)
      return this.firstFormGroup.controls.accUredjaji.value.toString().replace(',0', '').split(',');
  }
  isIzborni() {
    return this.firstFormGroup.controls.iznos.value !== "0";
  }
  tosslePerOne(all){ 
    if (this.allSelected.selected) {  
     this.allSelected.deselect();
     return false;
 }
   if(this.firstFormGroup.controls.accUredjaji.value.length==this.ureList.length)
     this.allSelected.select();
 
 }
  toggleAllSelection() {
    if (this.allSelected.selected) {
      this.firstFormGroup.controls.accUredjaji
        .patchValue([...this.ureList.map(item => item.id), 0]);
    } else {
      this.firstFormGroup.controls.accUredjaji.patchValue([]);
    }
  }

  prikazi3(stepper) {
    this.novoPlacanje.updateValueAndValidity();
    if (this.novoPlacanje.pristine || this.novoPlacanje.valid) {
      stepper.next();
    }
  }
  getPaymentInfo() {
    if (this.secondFormGroup.get('placanje').value === '1') {
      return {brojKartice: this.novoPlacanje.get('brojKartice').value,
    cvv: this.novoPlacanje.get('cvv').value,
  ime: this.novoPlacanje.get('ime').value,
mjesec: this.novoPlacanje.get('mjesec').value,
godina: this.novoPlacanje.get('godina').value}
    } else return this.savedPayments;
  }

  plati(stepper) {
    
    return this.dialog.open(PaymentConfirmedComponent, {width: '500px'}).afterClosed().subscribe(stepper.reset());
  
  }
}
