import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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

  constructor(private tourS : TourService, private scoreS : ScoreCalculService) { }

  @Input() nomJ1 = "Sylvain";
  @Input() nomJ2 = "Florian";
  @Output() tourEmitter = new EventEmitter();

  @Input() listDice !: Dice[];

  joueur1 = new Joueur(this.nomJ1) //Sylvain
  joueur2 = new Joueur(this.nomJ2) //Florian
  tour = new Tour(this.joueur1)

  ngOnInit(): void {
    
  }

  sendTour(leTour : Tour) { //Envoie l'objet Tour pour pouvoir avoir les données dans le main
    this.tourEmitter.emit(leTour); 
  }

  callChangeTour() { //Envoie l'objet Tour avec les dernières modifications pour l'update dans le main
    if(this.listDice != null && this.tour.tour < 10) {
      let tour = this.tourS.changeTour(this.tour, this.joueur1, this.joueur2);
      this.sendTour(tour)
      console.log("Tour " + tour.tour)
      console.log(this.listDice)
      console.log(tour.actuelJoueur)
      this.scoreS.calculScore(this.listDice, tour.actuelJoueur)
    }
    else if(this.listDice == null){
      alert("Vous devez lancez les dès au moins une fois !") //Obligatoire car les premiers dès sont "undefined"
    }
    else {
      alert("La partie est finie, impossible changer de joueur")
    }
  }

}
