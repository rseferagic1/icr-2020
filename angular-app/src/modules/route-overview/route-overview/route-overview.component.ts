import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-route-overview',
  templateUrl: './route-overview.component.html',
  styleUrls: ['./route-overview.component.scss']
})


export class RouteOverviewComponent implements OnInit {
  tacke;
  pocetne = ['Sarajevo - Sjever']
  krajnje =  ['Kakanj', 'Podlugovi', 'Zenica - Jug', 'Zenica - Sjever'];
  izlazi = [];
  sviizlazi = [{izlaz: 'Kakanj', cijena: '3.00KM', duzina: '54km', historija: 'Zadnji put ste vozili ovu rutu 20.10.2020.'},
  {izlaz: 'Podlugovi', cijena: '1.20KM', duzina: '23km', historija: 'Niste ranije vozili ovu rutu.'},
  {izlaz: 'Zenica - Jug', cijena: '6.00KM', duzina: '60km', historija: 'Niste ranije vozili ovu rutu.'},
  {izlaz: 'Zenica - Sjever', cijena: '7.00KM', duzina: '63km', historija: 'Niste ranije vozili ovu rutu.'},];
  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.tacke = this.formBuilder.group({
      pocetna: this.pocetne[0],
      kraj: null
    })
  }
  pretrazi() {
    if (this.tacke.value.kraj == null) {
      this.izlazi = this.sviizlazi;
    }
    
    else {
      this.izlazi = this.sviizlazi.filter(x => x.izlaz.includes(this.tacke.value.kraj));
    }
  }

}
