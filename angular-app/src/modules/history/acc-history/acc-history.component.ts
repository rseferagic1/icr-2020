import { animate, state, style, transition, trigger } from '@angular/animations';
import { formatDate } from '@angular/common';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, Sort } from '@angular/material';
import { UsersService } from 'src/modules/core/users.service';

@Component({
  selector: 'app-acc-history',
  templateUrl: './acc-history.component.html',
  styleUrls: ['./acc-history.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class AccHistoryComponent implements OnInit {
  constructor(
    private userService: UsersService
  ) {

  }
  columnsToDisplay = ['naziv', 'broj', 'datum', 'iznos'];
  expandedElement: Historija | null;
  dataSource;
  sortedData;
  imekolone = 
    {
      naziv: 'Akcija',
      datum: 'Datum',
      iznos: 'Iznos',
      broj: 'Broj ACC uređaja'
    }
    ngOnInit() {
      this.dataSource = this.userService.getUser1History();
      this.sortedData = new MatTableDataSource(this.userService.getUser1History());
    
    }
    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.sortedData.filter = filterValue.trim().toLowerCase();
    }

    sortData(sort: Sort) {
      const data = this.dataSource.slice();
      if (!sort.active || sort.direction === '') {
        this.sortedData = data;
        return;
      }
  
      this.sortedData = data.sort((a, b) => {
        const isAsc = sort.direction === 'asc';
        switch (sort.active) {
          case 'naziv': return this.compare(a.naziv, b.naziv, isAsc);
          case 'broj': return this.compare(a.broj, b.broj, isAsc);
          case 'datum': return this.compareDate(a.datum, b.datum, isAsc);
          case 'iznos': return this.compareMoney(a.iznos, b.iznos, isAsc);
          default: return 0;
        }
      });
    }
    compare(a: number | string, b: number | string, isAsc: boolean) {
      return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
    }
    compareDate(a: string, b: string, isAsc: boolean) {
      let date1 = Date.parse(a);
      let date2 = Date.parse(b);

      return (date1 < date2 ? -1 : 1) * (isAsc ? 1 : -1);
    }
    compareMoney(a: string, b: string, isAsc: boolean) {
      let mon1 = Number(a.slice(0, -2));
      let mon2 = Number(b.slice(0, -2));
      
      return (mon1 < mon2 ? -1 : 1) * (isAsc ? 1 : -1);
    }
  }
  




export interface Historija {
  naziv: string;
  datum: string;
  iznos: string;
  broj: string;
  ulaz: string;
  izlaz: string;
  vrijemeUl: string;
  vrijemeIz: string;
}

