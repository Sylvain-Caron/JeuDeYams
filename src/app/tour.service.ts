import { Injectable } from '@angular/core';
import { Joueur } from './joueur/Joueur';
import { Tour } from './tour/Tour'

@Injectable({
  providedIn: 'root'
})
export class TourService {

  constructor() { }

  finDuJeu !: boolean;

  changeTour(leTour : Tour, joueur1 : Joueur, joueur2: Joueur) {
    console.log("CHANGEMENT DE TOUR")
    if(leTour.tour < 10){
      ++leTour.tour
      if(leTour.actuelJoueur == joueur1 && this.finDuJeu != true)
      {
        leTour.actuelJoueur = joueur2;
      }
      else if(leTour.actuelJoueur == joueur2 && this.finDuJeu != true){
        leTour.actuelJoueur = joueur1;
      }
      if(leTour.tour == 10)
      {
        this.finDuJeu = true;
      }
    }
    else if(leTour.tour == 10 && this.finDuJeu == true){
      console.log("Fin du Jeu")
    }
    return leTour;
  }

  // createGame() {
  //   let joueurUn = new Joueur("Sylvain");
  //   let joueurDeux = new Joueur("Florian")
  //   let tour = new Tour(joueurUn);
  // }
}
