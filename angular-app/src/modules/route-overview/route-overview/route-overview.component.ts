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
  krajnje =  ['Kakanj'];
  izlazi = [];
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
this.izlazi.push({izlaz: 'Kakanj', cijena: '3.00KM'})
  }

}
