import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { TagInfo } from 'src/models/tag-info';
import { UsersService } from 'src/modules/core/users.service';

@Component({
  selector: 'app-tag-info',
  templateUrl: './tag-info.component.html',
  styleUrls: ['./tag-info.component.scss']
})
export class TagInfoComponent implements OnInit {

  constructor(
    private _snackBar: MatSnackBar,
    private userService: UsersService
  ) { }
    kategorija;
  tagInfo: TagInfo[];
  isEditDisabled = true;
  lowerBound;

  ngOnInit() {
    this.tagInfo = this.userService.getTagInfo();
    this.lowerBound = this.userService.getLowerBound();
  }
  cansend() {
    return this.kategorija == null;
  }
  editLowerBound() {
    this.isEditDisabled = false;
  }
  saveLowerBound() {
    this.isEditDisabled = true;
    this.userService.setLowerBound(this.lowerBound);
  }
  posaljiZahtjev() {
    this._snackBar.open('Vaš zahtjev je uspješno zaprimljen. Hvala Vam.', 'Ok', {
      duration: 6000,
      panelClass: ['blue-snackbar']
    });
    this.kategorija = null;
  }

}
