import { Component, OnInit, Input } from '@angular/core';
import { OggettiUtente } from '../oggettiutente';
import { OGGETTIUTENTE } from '../mock-oggettiutente';
import { Utenti } from '../utenti';
import { FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-user-objects',
  templateUrl: './user-objects.component.html',
  styleUrls: ['./user-objects.component.css']
})
export class UserObjectsComponent implements OnInit {
  @Input() f: Utenti;
  utoggForm : FormGroup;
  oggettoUtente : OggettiUtente[] = OGGETTIUTENTE;
  
  constructor(fb: FormBuilder) {
    this.utoggForm = fb.group({
     'oggutente': [''],
   });
  }
  onSubmit(value: string): void {
    console.log('oggetto utente: ', this.utoggForm.controls['oggutente'].value);
    this.onAdd();
    
 }
 onAdd(){
   let ou : OggettiUtente = new OggettiUtente();
   ou.proprietario = this.f.username;
   ou.nomeOggetto = this.utoggForm.controls['oggutente'].value;
   this.oggettoUtente.push(ou);
   console.log("Aggiunto");
 }
 

 
 

 ngOnInit() {
  }

}
