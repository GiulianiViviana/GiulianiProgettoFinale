import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-commenti',
  templateUrl: './commenti.component.html',
  styleUrls: ['./commenti.component.css']
})
export class CommentiComponent implements OnInit {
 myForm: FormGroup;
  constructor(fb: FormBuilder) {
   this.myForm = fb.group({
     'commento': [''],
   });
}
 onSubmit(value: string): void {
    console.log('commento: ', this.myForm.controls['commento'].value );
 }
  ngOnInit() {
  }

}
