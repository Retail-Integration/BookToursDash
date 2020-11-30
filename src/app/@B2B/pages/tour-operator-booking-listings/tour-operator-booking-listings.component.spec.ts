import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TourOperatorBookingListingsComponent } from './tour-operator-booking-listings.component';

describe('TourOperatorBookingListingsComponent', () => {
  let component: TourOperatorBookingListingsComponent;
  let fixture: ComponentFixture<TourOperatorBookingListingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TourOperatorBookingListingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TourOperatorBookingListingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
