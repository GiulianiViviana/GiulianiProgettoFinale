import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; 
import { AppComponent } from './app.component';
import { UtentiComponent } from './utenti/utenti.component';
import { CommentiComponent } from './commenti/commenti.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { UtentiDettagliComponent } from './utenti-dettagli/utenti-dettagli.component';
import { NewObjectComponent } from './new-object/new-object.component';

@NgModule({
  declarations: [
    AppComponent,
    UtentiComponent,
    CommentiComponent,
    UtentiDettagliComponent,
    NewObjectComponent
    
  ],
 imports: [
    BrowserModule, NgbModule ,
     FormsModule, 
   ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
