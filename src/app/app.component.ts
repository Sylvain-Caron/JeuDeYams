import { Component } from '@angular/core';
import { Joueur } from "../app/joueur/Joueur";
import { Dice } from "../app/dice/dice";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'JeuDeYams';

  joueur1 = new Joueur("Sylvain");
  joueur2 = new Joueur("Florian");

  //dice1 = new Dice('Dice1')

}
