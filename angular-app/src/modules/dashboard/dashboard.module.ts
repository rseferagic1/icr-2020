import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverviewComponent } from './overview/overview.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { MatButtonModule, MatCardModule, MatIconModule, MatToolbarModule } from '@angular/material';
import { UserInfoComponent } from './user-info/user-info.component';
import {MatTableModule} from '@angular/material/table';
import { AccBalanceComponent } from './acc-balance/acc-balance.component';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatTableModule,
    MatButtonModule
  ],
  declarations: [OverviewComponent, UserInfoComponent, AccBalanceComponent],
  exports: [DashboardRoutingModule]
})
export class DashboardModule { }
