export class Dice {
    nom !: string;
    valeur !: number;
    relance !: number;
    lock !: boolean;

    constructor(nom : string) {
        this.nom = nom;
        this.valeur = 0;
        this.relance = 3;
        this.lock = false;
    }

    lancer() {
        --this.relance; //On enlève 1
        if(this.relance != 0){
            this.valeur = Math.floor(Math.random() * 6) + 1;
        }
    }



    
}