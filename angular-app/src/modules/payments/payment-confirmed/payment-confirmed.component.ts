import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-payment-confirmed',
  templateUrl: './payment-confirmed.component.html',
  styleUrls: ['./payment-confirmed.component.scss']
})
export class PaymentConfirmedComponent implements OnInit {

  constructor(
    
    private dialogRef: MatDialogRef<PaymentConfirmedComponent>,
  ) { }

  ngOnInit() {
  }
  close() {
    this.dialogRef.close();
  }
}
