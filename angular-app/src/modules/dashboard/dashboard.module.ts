import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverviewComponent } from './overview/overview.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { MatButtonModule, MatCardModule, MatGridListModule, MatIconModule, MatInputModule, MatListModule, MatSelectModule, MatSnackBarModule, MatToolbarModule } from '@angular/material';
import { UserInfoComponent } from './user-info/user-info.component';
import {MatTableModule} from '@angular/material/table';
import { TagInfoComponent } from './tag-info/tag-info.component';
import { FormsModule } from '@angular/forms';
import { CoreModule } from '../core/core.module';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    MatTableModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    MatSelectModule,
    MatGridListModule,
    MatSnackBarModule,
    CoreModule
  ],
  declarations: [OverviewComponent, UserInfoComponent, TagInfoComponent],
  exports: [DashboardRoutingModule]
})
export class DashboardModule { }
