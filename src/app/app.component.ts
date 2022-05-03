import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Joueur } from "../app/joueur/Joueur";
import { Dice } from "../app/dice/dice";
import { TourComponent } from "../app/tour/tour.component";
import { Tour } from "../app/tour/Tour"
import { TourService } from './tour.service';
import { DiceService } from './dice.service';
import { ScoreCalculService } from './score-calcul.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'JeuDeYams';

  constructor (private tourS : TourService, private diceS : DiceService, private scoreS : ScoreCalculService) { }

  Joueur1 !: Joueur;
  Joueur2 !: Joueur;

  listDice !: Dice[];
  leTour !: Tour;
  start = false;
  dataJoueur = false;

  tabScore : any = []

  receiveDices($event: Dice[]) {  
    this.listDice = $event;
    console.log(this.listDice); 
  }

  receiveDataJoueur($event : any) {
    //Création des joueurs avec les noms saisis 
    this.Joueur1 = new Joueur($event.joueur1)
    this.Joueur2 = new Joueur($event.joueur2)
    //La Partie commence
    this.start = true;
    //DataJoueur ok
    this.dataJoueur = true
  }

  receiveTour($event: Tour){
    this.leTour = $event;
  }

  receiveTabScore($event : any){
    this.tabScore = $event
  }


}
