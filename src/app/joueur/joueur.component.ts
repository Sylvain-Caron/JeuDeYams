import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-joueur',
  templateUrl: './joueur.component.html',
  styleUrls: ['./joueur.component.scss']
})
export class JoueurComponent implements OnInit {

  constructor() { }

  @Input() nom !: string;

  ngOnInit(): void {
    
  }

}
