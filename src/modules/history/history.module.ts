import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccHistoryComponent } from './acc-history/acc-history.component';
import { HistoryRoutingModule } from './history-routing.module';
import { MatIconModule, MatInputModule, MatLabel, MatPaginatorModule, MatTableModule, MatToolbarModule, MatTooltipModule } from '@angular/material';
import {MatSortModule} from '@angular/material/sort';


@NgModule({
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatToolbarModule,
    MatTooltipModule,
    MatSortModule,
    MatInputModule,
    MatIconModule,
    MatPaginatorModule
  ],
  declarations: [AccHistoryComponent],
  exports: [AccHistoryComponent, HistoryRoutingModule]
})
export class HistoryModule { }
