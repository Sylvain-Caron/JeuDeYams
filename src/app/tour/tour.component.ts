import { Component, OnInit } from '@angular/core';
import { Joueur } from '../joueur/Joueur';
import { TourService } from '../tour.service';
import { Tour } from './Tour';

@Component({
  selector: 'app-tour',
  templateUrl: './tour.component.html',
  styleUrls: ['./tour.component.scss']
})
export class TourComponent implements OnInit {

  constructor(private tourS : TourService) { }

  joueur1 = new Joueur("FLORIAN")
  joueur2 = new Joueur("SYLVAIN")
  tour = new Tour(this.joueur1)

  changeTest() {
    console.log("Change tour")
  }

  callChangeTour() {
    this.tourS.changeTour(this.tour, this.joueur1, this.joueur2);  
  }

  checkName(nom : string) {
    console.log(nom);
  }

  ngOnInit(): void {
    
  }

}
