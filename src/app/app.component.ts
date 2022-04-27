import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Joueur } from "../app/joueur/Joueur";
import { Dice } from "../app/dice/dice";
import { TourComponent } from "../app/tour/tour.component";
import { Tour } from "../app/tour/Tour"
import { TourService } from './tour.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'JeuDeYams';

  constructor (private tourS : TourService) { }

  nomJ1 !: string;
  nomJ2 !: string;

  getName(nomJ1 : any, nomJ2 : any) {
    this.nomJ1 = nomJ1;
    this.nomJ2 = nomJ2;
  }
  // @Output() nameToJoueur = new EventEmitter();

  // sendName(nom : string){
  //   console.log("Dedans" + nom)

  //   this.nameToJoueur.emit(nom)
  // }

  // checkName(nom : any) {
  //   console.log(nom)
  // }
}
