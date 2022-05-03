import { Injectable } from '@angular/core';
import { DiceService } from './dice.service';
import { Dice } from './dice/dice';
import { Joueur } from './joueur/Joueur';


@Injectable({
  providedIn: 'root'
})
export class ScoreCalculService {

  constructor(private diceS : DiceService) { }

  getValuesDice(listDice: Dice[]) {
    let listValeurDice = []
    for (var dice of listDice) {
      listValeurDice.push(dice.getValeur());
      dice.setValeur(0); //On reset la valeur du dès pour le prochain joueur
    }
    return listValeurDice
  }

  calculScore(listDice: Dice[], leJoueur: Joueur) {
    let listValeurDice = this.getValuesDice(listDice)
    let dictValeur: any = {}
    let valeur: number = 0;
    console.log("Dans la fonction calculScore avec la liste des dès et le Joueur : " + leJoueur)
    for (var valeurDice of listValeurDice) {
      console.log(valeurDice)
      if (dictValeur[valeurDice]) {
        dictValeur[valeurDice] += 1;
      } else {
        dictValeur[valeurDice] = 1;
      }
    }
    // Avec la liste des dès on peut faire nos calculs 
    valeur = this.calculPoints(dictValeur);
    console.log(dictValeur)
    console.log("Joueur : " + leJoueur.nom)
    console.log("Valeur : " + valeur)
    leJoueur.score += valeur;
    this.callResetRelance(listDice)  
  }
/*
  callUnlock(listDice: Dice[]) {
    var dice !: Dice
    for (dice : Dice in listDice) {
      this.diceS.unlock(dice);
    }
  }
*/

    callResetRelance(listDice: Dice[]) {
    //Reçois la liste des Dès (object) et appel une fonction dans le service Dice pour remettre 
    //la relance à 3 pour le prochain Joueur
    this.diceS.resetDice(listDice);
  }

  calculPoints(dictValeur: any) {
    //Setup variable
    const tabSuite = [
      [1, 2, 3, 4],
      [2, 3, 4, 5],
      [3, 4, 5, 6],
      [1, 2, 3, 4, 5],
      [2, 3, 4, 5, 6]
    ]
    let resultat = 0 
    let chance = true 

    //BRELAN + FULL
    if (Object.values(dictValeur).includes(3)) {
      //FULL
      if (Object.values(dictValeur).includes(2)) {
        console.log("Full")
        resultat = 25
        chance = false
      }
      //BRELAN
      else {
        console.log("Brelan")
        var key: any = Object.keys(dictValeur).find(key => dictValeur[key] == 3)
        resultat = parseInt(key) * 3
        chance = false
      }
    }

    //CARRE
    if (Object.values(dictValeur).includes(4)) {
      var key: any = Object.keys(dictValeur).find(key => dictValeur[key] == 4)
      resultat = parseInt(key) * 4
      chance = false
    }

    //PETITE SUITE
    if (Object.keys(dictValeur).length == 4) {
      let tableau: Array<number> = []
      for (var valeur in dictValeur) {
        tableau.push(parseInt(valeur))
      }
      tabSuite.forEach((suite: any) => {
        if (JSON.stringify(tableau) === JSON.stringify(suite)) {
          console.log("Petite suite")
          resultat = 30
          chance = false
        }
      });
    }

    //GRANDE SUITE
    if (Object.keys(dictValeur).length == 5) {
      let tableau: Array<number> = []
      for (var valeur in dictValeur) {
        tableau.push(parseInt(valeur))
      }
      tabSuite.forEach((suite: any) => {
        if (JSON.stringify(tableau) === JSON.stringify(suite)) {
          console.log("Grande suite")
          resultat = 40
          chance = false
        }
      });
    }

    //YAMS
    if (Object.values(dictValeur).includes(5)) {
      var key: any = Object.keys(dictValeur).find(key => dictValeur[key] == 5)
      resultat = 50
      chance = false
    }

    //CHANCE
    if (chance == true) {
      for (var valeurDice in dictValeur) {
        resultat += parseInt(valeurDice) * dictValeur[valeurDice]
      }
    }
    console.log("Résultat : " + resultat)

    return resultat
  }
}
