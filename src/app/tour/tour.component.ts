import { Component, EventEmitter, Input, OnInit, Output, SimpleChange } from '@angular/core';
import { DiceService } from '../dice.service';
import { Dice } from '../dice/dice';
import { Joueur } from '../joueur/Joueur';
import { ScoreCalculService } from '../score-calcul.service';
import { TourService } from '../tour.service';
import { Tour } from './Tour';

@Component({
  selector: 'app-tour',
  templateUrl: './tour.component.html',
  styleUrls: ['./tour.component.scss']
})
export class TourComponent implements OnInit {

  constructor(private tourS : TourService, private scoreS : ScoreCalculService, private diceS : DiceService) { }

  @Input() DataJoueur !: Joueur[];
  @Output() tourEmitter = new EventEmitter();
  @Output() tabScoreEmitter = new EventEmitter()
  @Input() listDice !: Dice[];

  joueur1 = new Joueur("") //Sylvain
  joueur2 = new Joueur("") //Florian
  tour = new Tour(this.joueur1)
  tabScore : any = []

  ngOnInit(): void {
    
  }
  
  ngOnChanges(changes: any) {
    //Condition pour que le changement s'effectue seulement lors du premier envoi du formulaire
    if(changes.DataJoueur){
      this.joueur1.nom = changes.DataJoueur.currentValue[0].nom
      this.joueur2.nom = changes.DataJoueur.currentValue[1].nom
    } 
  }

  sendTabScore() {
    this.tabScoreEmitter.emit(this.scoreS.getStats());
  }

  sendTour(leTour : Tour) { //Envoie l'objet Tour pour pouvoir avoir les données dans le main
    this.tourEmitter.emit(leTour);
  }

  callChangeTour() { //Envoie l'objet Tour avec les dernières modifications pour l'update dans le main
    if(this.listDice != null && this.tour.tour <= 10 && this.diceS.checkValeur(this.listDice) == false) {
      
      this.scoreS.calculScore(this.listDice, this.tour.actuelJoueur, this.tour)
      this.tabScore = this.scoreS.getStats()
      this.sendTabScore()

      let tour = this.tourS.changeTour(this.tour, this.joueur1, this.joueur2); //Changement de tour qui interchange les Joueurs dans l'objet Tour
      this.sendTour(tour)
    }
    else if(this.listDice == null || this.diceS.checkValeur(this.listDice) == true){
      alert("Vous devez lancez les dès au moins une fois !") //Obligatoire car les premiers dès sont "undefined"
    }
    else {
      alert("La partie est finie, impossible changer de joueur")
    }
  }

}
