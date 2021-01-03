import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouteOverviewComponent } from './route-overview/route-overview.component';
import { MatButtonModule, MatCardModule, MatExpansionModule, MatFormFieldModule, MatIconModule, MatInputModule, MatSelectModule, MatTableModule, MatToolbarModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatExpansionModule
  ],
  declarations: [RouteOverviewComponent],
  exports: [RouteOverviewComponent]
})
export class RouteOverviewModule { }
