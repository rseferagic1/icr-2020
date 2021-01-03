import { Component, OnInit } from '@angular/core';
import { TagInfo } from 'src/models/tag-info';
import { UsersService } from 'src/modules/core/users.service';

@Component({
  selector: 'app-tag-info',
  templateUrl: './tag-info.component.html',
  styleUrls: ['./tag-info.component.scss']
})
export class TagInfoComponent implements OnInit {

  constructor(
    private userService: UsersService
  ) { }

  tagInfo: TagInfo[];
  isEditDisabled = true;
  lowerBound;

  ngOnInit() {
    this.tagInfo = this.userService.getTagInfo();
    this.lowerBound = this.userService.getLowerBound();
  }
  editLowerBound() {
    this.isEditDisabled = false;
  }
  saveLowerBound() {
    this.isEditDisabled = true;
    this.userService.setLowerBound(this.lowerBound);
  }

}
