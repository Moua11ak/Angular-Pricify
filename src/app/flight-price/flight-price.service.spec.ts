import { TestBed } from '@angular/core/testing';

import { FlightPriceService } from './flight-price.service';

describe('FlightPriceService', () => {
  let service: FlightPriceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlightPriceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
