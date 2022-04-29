import { Injectable } from '@angular/core';
import { Dice } from './dice/dice';
import { Joueur } from './joueur/Joueur';

@Injectable({
  providedIn: 'root'
})
export class ScoreCalculService {

  constructor() { }
  
  getValuesDice(listDice : Dice[]) {
    let listValeurDice = []
    for(var dice of listDice){ 
      listValeurDice.push(dice.getValeur());
      dice.setValeur(0); //On reset la valeur du dès pour le prochain joueur
    }
    return listValeurDice
  }

  calculScore(listDice : Dice[], leJoueur : Joueur) {
    let listValeurDice = this.getValuesDice(listDice)
    let dicValeur : any = {}
    let valeur = 0;
    console.log("Dans la fonction calculScore avec la liste des dès et le Joueur : " + leJoueur)
    for(var dice of listValeurDice){
      console.log(dice) 
      if (dicValeur[dice]) {
        dicValeur[dice] += 1;
      } else {
        dicValeur[dice] = 1;
      }
      valeur += dice // TEST
    }
    console.log(dicValeur)
    console.log("Joueur : " + leJoueur.nom)
    console.log("Valeur : " + valeur)
    leJoueur.score += valeur;
    // Avec la liste des dès on peut faire nos calculs 
  }

  callResetRelance(listDice : Dice[]) {
    //Reçois la liste des Dès (object) et appel une fonction dans le service Dice pour remettre la relance à 3 pour le prochaine Joueur
  }
  
}
