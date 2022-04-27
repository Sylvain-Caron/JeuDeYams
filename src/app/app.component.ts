import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Joueur } from "../app/joueur/Joueur";
import { Dice } from "../app/dice/dice";
import { TourComponent } from "../app/tour/tour.component";
import { Tour } from "../app/tour/Tour"
import { TourService } from './tour.service';
import { DiceService } from './dice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'JeuDeYams';

  constructor (private tourS : TourService, private diceS : DiceService) { }

  nomJ1 !: string;
  nomJ2 !: string;

  listDice !: Dice[];
  leTour !: Tour;

  receiveDices($event: Dice[]) {  
    this.listDice = $event;
    console.log(this.listDice); 
  }

  receiveTour($event: Tour){
    this.leTour = $event;
    console.log(this.leTour);
    console.log(this.leTour.actuelJoueur.nom)
  }
  // callDices() {
  //   let dice = this.diceS.getDices();
  //   console.log(dice)
  // }

  // @Output() nameToJoueur = new EventEmitter();

  // sendName(nom : string){
  //   console.log("Dedans" + nom)

  //   this.nameToJoueur.emit(nom)
  // }

  // checkName(nom : any) {
  //   console.log(nom)
  // }
}
