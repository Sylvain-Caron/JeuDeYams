import { Injectable } from '@angular/core';
import { Dice } from './dice/dice';

@Injectable({
  providedIn: 'root'
})
export class DiceService {

  constructor() { }


  lancer(allDice : Dice[]) {
    // console.log("test")
    for(var dice of allDice){
      if(dice.lock == false && dice.relance > 0 ){
        dice.valeur=Math.floor(Math.random()*6)+1;
        --dice.relance;
        console.log(dice)
      }
      else if(dice.lock) {
        console.log("Le dès : " + dice.nom + " est lock !")

      }
      else
        console.log("Aucune relance possible")
      }
    return allDice;
  }

  lock(dice : Dice){
    // console.log(dice)
    dice.lock = true;
  }

  resetDice(listDice : Dice[]) {
    //On reset la relance des dès à 3 pour que le prochain joueur puisse faire 3 lancés 
  }

}