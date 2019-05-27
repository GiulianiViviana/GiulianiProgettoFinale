import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; 
import { AppComponent } from './app.component';
import { UtentiComponent } from './utenti/utenti.component';
import { CommentiComponent } from './commenti/commenti.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    UtentiComponent,
    CommentiComponent
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
