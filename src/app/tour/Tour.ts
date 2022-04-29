import { Joueur } from "../joueur/Joueur";

export class Tour {
    tour = 1;
    actuelJoueur !: Joueur;
    previousJoueur !: Joueur;

    constructor (joueur : Joueur) { 
        this.actuelJoueur = joueur;
    }


    changeTour() {
        this.tour++;
    }

    changeJoueur(leJoueur : Joueur, autreJoueur : Joueur) {
        if(this.actuelJoueur == leJoueur){
            this.actuelJoueur = autreJoueur;
        }
        else{
            this.actuelJoueur = leJoueur;
        }
    }
}