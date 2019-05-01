import { TestBed } from '@angular/core/testing';

import { TravellerService } from './traveller.service';

describe('TravellerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TravellerService = TestBed.get(TravellerService);
    expect(service).toBeTruthy();
  });
});
