export class Joueur {
    nom !: string;
    score !: number;
    tour !: number;
    relance !: number;

    constructor (nom : string) {
        this.nom = nom;
        this.score = 0;
        this.tour = 0;
        this.relance = 3;
    }

    getScore() {
        return this.score;
    }

    getNom() {
        return this.nom;
    }

    getRelance() {
        return this.relance;
    }
}