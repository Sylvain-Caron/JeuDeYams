export class Joueur {
    nom !: string;
    score !: number;

    constructor (nom : string) {
        this.nom = nom;
        this.score = 0;
    }

    addScore(value : number) {
        this.score = this.score + value;
    }

    getScore() {
        return this.score;
    }

    getNom() {
        return this.nom;
    }
}