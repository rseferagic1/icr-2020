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
import { LoginModule } from 'src/modules/login/login.module';
import { LoginRoutingModule } from 'src/modules/login/login-routing.module';
import { DashboardRoutingModule } from 'src/modules/dashboard/dashboard-routing.module';
import { RouterModule } from '@angular/router';
import { LoginComponent } from 'src/modules/login/login/login.component';
import { OverviewComponent } from 'src/modules/dashboard/overview/overview.component';
import { AccHistoryComponent } from 'src/modules/history/acc-history/acc-history.component';
import { RouteOverviewComponent } from 'src/modules/route-overview/route-overview/route-overview.component';
import { RouteOverviewModule } from 'src/modules/route-overview/route-overview.module';
import { RegisterComponent } from 'src/modules/login/register/register.component';
import { PaymentStepsComponent } from 'src/modules/payments/payment-steps/payment-steps.component';
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
    DashboardModule,
    RouteOverviewModule,
    LoginModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      {path: 'login', component: LoginComponent, },
      {path: 'register', component: RegisterComponent},
      { path: 'in', component: SidenavComponent,
        children: [
          { path: '', redirectTo: 'pocetna', pathMatch: 'full' },
          { path: 'pocetna', component: OverviewComponent },
          { path: 'historija', component: AccHistoryComponent },
          { path: 'pregled-ruta', component: RouteOverviewComponent},
          { path: 'dopuna', component: PaymentStepsComponent}
        ]
      }

    ])
  ],
  providers: [],
  entryComponents: [
    SidenavComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
