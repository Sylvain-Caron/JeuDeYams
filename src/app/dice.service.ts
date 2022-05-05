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
    //Check si la valeur n'est pas 0|?
    if(dice.getValeur() != 0) {
      dice.lock = true;
    }
  }

  unlock(listDice : Dice[]){
    for(var dice of listDice) {
      dice.lock = false;
    }
  }

  unlockDice(dice : Dice) {
    dice.lock = false;
  }

  resetDice(listDice : Dice[]) {
    for(var dice of listDice) {
      dice.relance = 3;
    }
  }

  //Regarde si l'un des dès est à 0'
  checkValeur(listDice : Dice[]) {
    for(var dice of listDice) {
      if(dice.valeur == 0){
        return true;
      }
    }
    return false;
  }
}