import { Component, Input, OnInit, SimpleChange } from '@angular/core';
import { ScoreCalculService } from '../score-calcul.service';

@Component({
  selector: 'app-tab-score',
  templateUrl: './tab-score.component.html',
  styleUrls: ['./tab-score.component.scss']
})
export class TabScoreComponent implements OnInit {

  constructor(private scoreS : ScoreCalculService) { }

  ngOnInit(): void {
  }

  @Input() tabScore : any = [];

}
