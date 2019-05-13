import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RegistrazioneComponent } from './registrazione/registrazione.component';
import { UtentiComponent } from './utenti/utenti.component';
import { CommentiComponent } from './commenti/commenti.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrazioneComponent,
    UtentiComponent,
    CommentiComponent
  ],
 imports: [
    BrowserModule, NgbModule //Aggiungiamolo qui
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
