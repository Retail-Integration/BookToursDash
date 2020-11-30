import { TestBed } from '@angular/core/testing';

import { B2BBookingServiceService } from './b2-bbooking-service.service';

describe('B2BBookingServiceService', () => {
  let service: B2BBookingServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(B2BBookingServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
