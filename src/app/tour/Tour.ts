import { Joueur } from "../joueur/Joueur";

export class Tour {
    tour = 1;
    actuelJoueur !: Joueur;
    previousJoueur !: Joueur;

    constructor (joueur : Joueur) { 
        this.actuelJoueur = joueur;
    }
}