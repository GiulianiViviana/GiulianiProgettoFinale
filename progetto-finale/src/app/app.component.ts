import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Utenti } from './utenti';
import { UTENTI } from './mock-utenti';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Progetto finale';
  myForm: FormGroup;
  utente : Utenti[];
  selectedUtenti: Utenti;
 constructor(fb: FormBuilder) {
   this.utente = Array<Utenti>();
   this.myForm = fb.group({
     'username': ['', Validators.required],
     'nome': ['', Validators.required],
     'cognome': ['', Validators.required],
     'email': ['', Validators.required],
     'password': ['', Validators.required],
   });
}
 onSubmit(value: string): void {
    console.log('username: ', this.myForm.controls['username'].value );
    console.log('nome: ', this.myForm.controls['nome'].value );
    console.log('cognome: ', this.myForm.controls['cognome'].value);
    console.log('email: ', this.myForm.controls['email'].value);
    console.log('password: ', this.myForm.controls['password'].value);
    this.onAdd();
  }
  onSelect(ute: Utenti): void {
    this.selectedUtenti = ute;
  }
  onAdd(){
   let ut : Utenti = new Utenti();
   ut.username = this.myForm.controls['username'].value;
   ut.nome = this.myForm.controls['nome'].value;
   ut.cognome = this.myForm.controls['cognome'].value;
   ut.email = this.myForm.controls['email'].value;
   ut.password = this.myForm.controls['password'].value;
   this.utente.push(ut);
   console.log("Aggiunto");
 }
 
}
