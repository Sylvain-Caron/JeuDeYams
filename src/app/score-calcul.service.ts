import { Injectable, Output, EventEmitter } from '@angular/core';
import { DiceService } from './dice.service';
import { Dice } from './dice/dice';
import { Joueur } from './joueur/Joueur';
import { Tour } from './tour/Tour';


@Injectable({
  providedIn: 'root'
})
export class ScoreCalculService {

  constructor(private diceS : DiceService) { }

  tabScore : any = []

  getValuesDice(listDice: Dice[]) {
    let listValeurDice = []
    for (var dice of listDice) {
      listValeurDice.push(dice.getValeur());
      dice.setValeur(0); //On reset la valeur du dès pour le prochain joueur
    }
    return listValeurDice
  }

  setStats(stat : any) {
    this.tabScore.push(stat)
  }
  
  getStats() {
    return this.tabScore
  }
  
  calculScore(listDice: Dice[], leJoueur: Joueur, leTour : Tour) {
    //Setup Data
    let listValeurDice = this.getValuesDice(listDice)
    let dictValeur: any = {}
    let valeur: any = 0;
    let type: any = ""

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
    valeur = this.calculPoints(dictValeur)[0];
    type = this.calculPoints(dictValeur)[1]
    console.log(dictValeur)
    console.log("Joueur : " + leJoueur.nom)
    console.log("Valeur : " + valeur)
    leJoueur.score += valeur;
    this.callResetRelance(listDice) 
    this.callUnlock(listDice)
    let stat = {
      'Joueur': leJoueur.nom,
      'Score': valeur,
      'Tour': leTour.tour,
      'Type': type,
      'Total': leJoueur.score
    }
    this.setStats(stat)
  }

  callUnlock(listDice: Dice[]) {
      this.diceS.unlock(listDice);
  }

  callResetRelance(listDice: Dice[]) {
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
    let type = ""

    //BRELAN + FULL
    if (Object.values(dictValeur).includes(3)) {
      //FULL
      if (Object.values(dictValeur).includes(2)) {
        console.log("Full")
        resultat = 25
        chance = false
        type = "Full"
      }
      //BRELAN
      else {
        console.log("Brelan")
        var key: any = Object.keys(dictValeur).find(key => dictValeur[key] == 3)
        resultat = parseInt(key) * 3
        chance = false
        type = "Brelan"
      }
    }

    //CARRE
    if (Object.values(dictValeur).includes(4)) {
      var key: any = Object.keys(dictValeur).find(key => dictValeur[key] == 4)
      resultat = parseInt(key) * 4
      chance = false
      type = "Carré"
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
          type = "Petite Suite"
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
          type = "Grande Suite"
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
      console.log("Chance")
      type = "Chance"
    }
    //console.log("Résultat : " + resultat)

    return [resultat, type]
  }
}
