import { animate, state, style, transition, trigger } from '@angular/animations';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';

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
export class AccHistoryComponent {
  dataSource = ELEMENT_DATA;
  columnsToDisplay = ['naziv', 'broj', 'datum', 'iznos'];
  expandedElement: Historija | null;
  imekolone = 
    {
      naziv: 'Akcija',
      datum: 'Datum',
      iznos: 'Iznos',
      broj: 'Broj ACC uređaja'
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



const ELEMENT_DATA: Historija[] = [
  {
    naziv: 'Uplata',
    datum: '11.04.2020.',
    iznos: '20.00KM',
    broj: '1230 2675 1884',
    ulaz: '-',
    izlaz: '-',
    vrijemeUl: '-',
    vrijemeIz: '-'
  },  
  {
    naziv: 'Naplata autoceste',
    datum: '16.04.2020.',
    iznos: '2.50KM',
    broj: '1230 2675 1884',
    ulaz: 'Sarajevo - Zapad',
    izlaz: 'Tarčin',
    vrijemeUl: '16:40',
    vrijemeIz: '17:35'
  },
  {
    naziv: 'Naplata autoceste',
    datum: '17.04.2020.',
    iznos: '2.50KM',
    broj: '1230 2675 1884',
    ulaz: 'Tarčin',
    izlaz: 'Sarajevo - Zapad',
    vrijemeUl: '13:32',
    vrijemeIz: '14:04'
  },
  {
    naziv: 'Uplata',
    datum: '21.06.2020.',
    iznos: '10.00KM',
    broj: '1230 2675 1884',
    ulaz: '-',
    izlaz: '-',
    vrijemeUl: '-',
    vrijemeIz: '-'
  },
  {
    naziv: 'Naplata autoceste',
    datum: '10.07.2020.',
    iznos: '4.00KM',
    broj: '1230 2675 1884',
    ulaz: 'Sarajevo - Sjever',
    izlaz: 'Kakanj',
    vrijemeUl: '14:56',
    vrijemeIz: '15:49'
  },
  {
    naziv: 'Naplata autoceste',
    datum: '10.07.2020.',
    iznos: '3.50KM',
    broj: '1230 2675 1884',
    ulaz: 'Kakanj II',
    izlaz: 'Zenica - Sjever',
    vrijemeUl: '18:12',
    vrijemeIz: '19:18'
  },
  {
    naziv: 'Uplata',
    datum: '18.10.2020.',
    iznos: '5.00KM',
    broj: '1230 2675 1884',
    ulaz: '-',
    izlaz: '-',
    vrijemeUl: '-',
    vrijemeIz: '-'
  }
];