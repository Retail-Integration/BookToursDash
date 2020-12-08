import { TestBed } from '@angular/core/testing';

import { B2BBookingService } from './b2-bbooking.service';

describe('B2BBookingServiceService', () => {
  let service: B2BBookingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(B2BBookingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
