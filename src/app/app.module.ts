import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DiceComponent } from './dice/dice.component';
import { JoueurComponent } from './joueur/joueur.component';
import { TourComponent } from './tour/tour.component';
import { FormPlayerComponent } from './form-player/form-player.component';
import { FormsModule } from '@angular/forms';
import { TabScoreComponent } from './tab-score/tab-score.component';

@NgModule({
  declarations: [
    AppComponent,
    DiceComponent,
    JoueurComponent,
    TourComponent,
    FormPlayerComponent,
    TabScoreComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
