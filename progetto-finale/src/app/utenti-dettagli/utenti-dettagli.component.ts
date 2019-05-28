import { Component, OnInit, Input } from '@angular/core';
import { Utenti } from '../utenti';

@Component({
  selector: 'app-utenti-dettagli',
  templateUrl: './utenti-dettagli.component.html',
  styleUrls: ['./utenti-dettagli.component.css']
})
export class UtentiDettagliComponent implements OnInit {
@Input() v: Utenti;
  constructor() { }

  ngOnInit() {
  }

}
