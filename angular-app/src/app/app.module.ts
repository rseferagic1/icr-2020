import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import { SidenavComponent } from 'src/modules/core/sidenav/sidenav.component';
import { CoreModule } from 'src/modules/core/core.module';
import { MatToolbarModule } from '@angular/material';
import { PaymentsModule } from 'src/modules/payments/payments.module';
import { HistoryModule } from 'src/modules/history/history.module';
import { DashboardModule } from 'src/modules/dashboard/dashboard.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    CoreModule,
    PaymentsModule,
    HistoryModule,
    DashboardModule
  ],
  providers: [],
  entryComponents: [
    SidenavComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
