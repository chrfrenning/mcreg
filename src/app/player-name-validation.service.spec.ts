import { TestBed } from '@angular/core/testing';

import { PlayerNameValidationService } from './player-name-validation.service';

describe('PlayerNameValidationService', () => {
  let service: PlayerNameValidationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlayerNameValidationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
