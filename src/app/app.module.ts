import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DiceComponent } from './dice/dice.component';
import { JoueurComponent } from './joueur/joueur.component';

@NgModule({
  declarations: [
    AppComponent,
    DiceComponent,
    JoueurComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
