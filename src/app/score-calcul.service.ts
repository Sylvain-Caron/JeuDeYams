import { Injectable } from '@angular/core';
import { Dice } from './dice/dice';
import { Joueur } from './joueur/Joueur';

@Injectable({
  providedIn: 'root'
})
export class ScoreCalculService {

  constructor() { }

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
      // valeur += valeurDice // TEST
    }
    valeur = this.calculPoints(dictValeur);
    console.log(dictValeur)
    console.log("Joueur : " + leJoueur.nom)
    console.log("Valeur : " + valeur)
    leJoueur.score += valeur;
    // Avec la liste des dès on peut faire nos calculs 
  }

  callResetRelance(listDice: Dice[]) {
    //Reçois la liste des Dès (object) et appel une fonction dans le service Dice pour remettre 
    //la relance à 3 pour le prochain Joueur
  }

  calculPoints(dictValeur: any) {
    const tabSuite = [
      [1, 2, 3, 4],
      [2, 3, 4, 5],
      [3, 4, 5, 6],
      [1, 2, 3, 4, 5],
      [2, 3, 4, 5, 6]
    ]
    let resultat = 0

    /*
    let test = Object.entries(dictValeur).forEach(([key, value]) => {
      console.log("test" + key, value);
    })
    dictValeur.sort()
    console.log("ORDRE CROISSANT" + dictValeur.sort())
    */


    //console.log(dicValeur)
    //dicValeur[valeurDice] = nombre de fois ou il y a la valeur
    //parseInt(valeurDice) = valeur 

    //BRELAN + FULL
    if (Object.values(dictValeur).includes(3)) {
      //FULL
      if (Object.values(dictValeur).includes(2)) {
        console.log("c'est un full")
        resultat = 25
      }
      //BRELAN
      else {
        console.log("c'est un brelan")
        var key: any = Object.keys(dictValeur).find(key => dictValeur[key] == 3)
        //var valeur = dictValeur[key] // Retourne la valeur
        //console.log("valeur "+valeur) 
        //console.log("test "+dictValeur[key])
        //console.log("cle "+key)
        resultat = parseInt(key) * 3
      }
    }

    //CARRE
    if (Object.values(dictValeur).includes(4)) {
      var key: any = Object.keys(dictValeur).find(key => dictValeur[key] == 4)
      resultat = parseInt(key) * 4

    }


    //PETITE SUITE
    if (Object.keys(dictValeur).length >= 4) {
      console.log("petite suite")
      let tableau: any = []
      for (var valeur in dictValeur) {
        tableau.push(valeur)
      }
      console.log("avant if " + tableau)
      tabSuite.forEach(suite => {
        console.log("suite "+suite);
        console.log("tab "+tableau);
        if (JSON.stringify(tableau) === JSON.stringify(suite)) {
          console.log("c ganer " + tableau)
        }
      });
    }

    else {
      //console.log("False");

    }


    //YAMS
    if (Object.values(dictValeur).includes(5)) {
      var key: any = Object.keys(dictValeur).find(key => dictValeur[key] == 5)
      resultat = 50
    }
    /*
        //GRANDE SUITE
        if (dicValeur[valeurDice] == 5) {
          resultat = 40
        }
    /*
        
    
        
        else {
          //resultat += parseInt(valeurDice)*dictValeur[valeurDice]
          //console.log("ervev"+dictValeur[valeurDice])
        }
    */

    /*
          for (var valeurDice in dictValeur) {
            resultat += parseInt(valeurDice) * dictValeur[valeurDice]
            console.log("ervev" + dictValeur[valeurDice])
          }
    
          console.log("resulat : " + resultat)
    */

    return resultat
  }

}
