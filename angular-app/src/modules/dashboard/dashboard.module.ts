import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverviewComponent } from './overview/overview.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { MatButtonModule, MatCardModule, MatIconModule, MatInputModule, MatToolbarModule } from '@angular/material';
import { UserInfoComponent } from './user-info/user-info.component';
import {MatTableModule} from '@angular/material/table';
import { AccBalanceComponent } from './acc-balance/acc-balance.component';
import { TagInfoComponent } from './tag-info/tag-info.component';
import { FormsModule } from '@angular/forms';
import { CoreModule } from '../core/core.module';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatTableModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    CoreModule
  ],
  declarations: [OverviewComponent, UserInfoComponent, AccBalanceComponent, TagInfoComponent],
  exports: [DashboardRoutingModule]
})
export class DashboardModule { }
