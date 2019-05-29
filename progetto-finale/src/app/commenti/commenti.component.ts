import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Commenti } from '../commenti';
import { COMMENTI } from '../mock-commenti';

@Component({
  selector: 'app-commenti',
  templateUrl: './commenti.component.html',
  styleUrls: ['./commenti.component.css']
})
export class CommentiComponent implements OnInit {
 myForm: FormGroup;
 commento : Commenti[] = COMMENTI;
  constructor(fb: FormBuilder) {
   this.myForm = fb.group({
     'commento': [''],
   });
}
 onSubmit(value: string): void {
    console.log('commento: ', this.myForm.controls['commento'].value);
    this.onAdd();
 }
 onAdd(){
   let co : Commenti = new Commenti();
   co.commento = this.myForm.controls['commento'].value;
   this.commento.push(co);
   console.log("Aggiunto");
 }
  ngOnInit() {
  }

}
