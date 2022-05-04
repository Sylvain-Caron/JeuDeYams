export class Joueur {
    nom !: string;
    score !: number;
    tour !: number;

    constructor (nom : string) {
        this.nom = nom;
        this.score = 0;
        this.tour = 0;
    }

    getScore() {
        return this.score;
    }

    getNom() {
        return this.nom;
    }
}