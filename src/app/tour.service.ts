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
    if(leTour.tour <= 10){
      /*
        Interchange des joueurs et ajout du tour au joueur
      */
      if(leTour.actuelJoueur == joueur1 && this.finDuJeu != true)
      {
        leTour.actuelJoueur = joueur2;
        leTour.previousJoueur = joueur1;
        joueur1.tour++
      }
      else if(leTour.actuelJoueur == joueur2 && this.finDuJeu != true){
        leTour.actuelJoueur = joueur1;
        leTour.previousJoueur = joueur2;
        joueur2.tour++
      }
      if(joueur1.tour == joueur2.tour) //Chaque Joueur doit jouer pour changer de tour
      {
        leTour.tour++
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
}
