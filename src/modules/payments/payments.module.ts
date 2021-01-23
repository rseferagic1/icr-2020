import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentStepsComponent } from './payment-steps/payment-steps.component';
import { MatButtonModule, MatCardModule, MatDatepickerModule, MatDialogModule, MatIconModule, MatInputModule, MatNativeDateModule, MatRadioModule, MatSelectModule, MatStepperModule, MatToolbarModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import { PaymentConfirmedComponent } from './payment-confirmed/payment-confirmed.component';

@NgModule({
  imports: [
    CommonModule,
    MatStepperModule,
    MatButtonModule,
    MatDialogModule,
    MatToolbarModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    MatRadioModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    NgxMaskModule.forRoot()
  ],
  declarations: [PaymentStepsComponent, PaymentConfirmedComponent],
  entryComponents: [PaymentConfirmedComponent]
})
export class PaymentsModule { }
