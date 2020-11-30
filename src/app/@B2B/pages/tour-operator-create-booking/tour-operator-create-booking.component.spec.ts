import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TourOperatorCreateBookingComponent } from './tour-operator-create-booking.component';

describe('TourOperatorCreateBookingComponent', () => {
  let component: TourOperatorCreateBookingComponent;
  let fixture: ComponentFixture<TourOperatorCreateBookingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TourOperatorCreateBookingComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TourOperatorCreateBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
