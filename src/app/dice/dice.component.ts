import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DiceService } from '../dice.service';
import { Dice } from './dice';

@Component({
  selector: 'app-dice',
  templateUrl: './dice.component.html',
  styleUrls: ['./dice.component.scss']
})
export class DiceComponent implements OnInit {

  constructor(private diceS : DiceService) { }

  //Création de 5 dés

  D1 = new Dice("D1")
  D2 = new Dice("D2")
  D3 = new Dice("D3")
  D4 = new Dice("D4")
  D5 = new Dice("D5")

  allDice = [this.D1,this.D2,this.D3,this.D4,this.D5]

  
  @Output() dicesEmitter = new EventEmitter();


  ngOnInit(): void {
  }

  sendDices(listDices : Dice[]){
    this.dicesEmitter.emit(listDices); 
  }

  callRelance() {
    let listDices = this.diceS.lancer(this.allDice)
    this.sendDices(listDices)
  }

  callLock(dice : Dice) {
    this.diceS.lock(dice)  
  }
  
}
