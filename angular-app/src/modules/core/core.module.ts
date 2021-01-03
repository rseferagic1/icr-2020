import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './sidenav/sidenav.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { UsersService } from './users.service';
import { MatButtonModule, MatIconModule, MatTooltipModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { IcrAppComponent } from './icr-app/icr-app.component';

@NgModule({
  imports: [
    CommonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    RouterModule
  ],
  declarations: [SidenavComponent, IcrAppComponent],
  exports: [
    SidenavComponent,
    IcrAppComponent
  ],
  providers: [UsersService]
})
export class CoreModule { }
