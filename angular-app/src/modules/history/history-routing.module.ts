import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 
import { AccHistoryComponent } from './acc-history/acc-history.component';

const routes: Routes = [
    { path: 'historija' , component: AccHistoryComponent }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class HistoryRoutingModule { }