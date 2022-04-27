import { TestBed } from '@angular/core/testing';

import { ScoreCalculService } from './score-calcul.service';

describe('ScoreCalculService', () => {
  let service: ScoreCalculService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScoreCalculService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
