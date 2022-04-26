import { Component, OnInit } from '@angular/core';
import { Dice } from './dice';

@Component({
  selector: 'app-dice',
  templateUrl: './dice.component.html',
  styleUrls: ['./dice.component.scss']
})
export class DiceComponent implements OnInit {

  constructor() { }

  //Création de 6 dés

  D1 = new Dice("D1")
  D2 = new Dice("D2")
  D3 = new Dice("D3")
  D4 = new Dice("D4")
  D5 = new Dice("D5")

  allDice = [this.D1,this.D2,this.D3,this.D4,this.D5]

  garde(dice : Dice) {
    console.log("Je garde")
    dice.lock = true;
  }

  relance() {
    for (var dice of this.allDice) {
      console.log(dice);
    }
  }

  ngOnInit(): void {
  }

}
