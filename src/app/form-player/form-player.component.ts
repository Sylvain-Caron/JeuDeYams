import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-player',
  templateUrl: './form-player.component.html',
  styleUrls: ['./form-player.component.scss']
})
export class FormPlayerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  dictData : any = {}

  @Output() sendToJoueur = new EventEmitter();

  onSubmit(form : NgForm) {
    this.dictData["joueur1"] = form.value.Joueur1
    this.dictData["joueur2"] = form.value.Joueur2
    this.sendToJoueur.emit(this.dictData);
  }
}
