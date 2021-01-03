import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccHistoryComponent } from './acc-history/acc-history.component';
import { HistoryRoutingModule } from './history-routing.module';
import { MatPaginatorModule, MatTableModule, MatToolbarModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatToolbarModule
  ],
  declarations: [AccHistoryComponent],
  exports: [AccHistoryComponent, HistoryRoutingModule]
})
export class HistoryModule { }
