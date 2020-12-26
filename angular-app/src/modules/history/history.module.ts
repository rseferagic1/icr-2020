import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccHistoryComponent } from './acc-history/acc-history.component';
import { HistoryRoutingModule } from './history-routing.module';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AccHistoryComponent],
  exports: [AccHistoryComponent, HistoryRoutingModule]
})
export class HistoryModule { }
