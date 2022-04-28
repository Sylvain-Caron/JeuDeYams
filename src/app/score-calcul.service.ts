import { Injectable } from '@angular/core';
import { Dice } from './dice/dice';
import { Joueur } from './joueur/Joueur';

@Injectable({
  providedIn: 'root'
})
export class ScoreCalculService {

  constructor() { }

  getValeur(listDice : Dice[]) {
    let listValeurDice = []
    for(var dice of listDice){ 
      listValeurDice.push(dice.valeur)
    }
    return listValeurDice
  }

  calculScore(listDice : Dice[], leJoueur : Joueur) {
    let listValeurDice = this.getValeur(listDice)
    console.log("Dans la fonction calculScore avec la liste des dès et le Joueur : " + leJoueur)
    for(var dice of listDice){
      console.log(dice) 
    }
    console.log(listValeurDice)
    console.log("Joueur : " + leJoueur.nom)

    // Avec la liste des dès on peut faire nos calculs 
  }

  
}
