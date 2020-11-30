import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelBookingControlComponent } from './cancel-booking-control.component';

describe('CancelBookingControlComponent', () => {
  let component: CancelBookingControlComponent;
  let fixture: ComponentFixture<CancelBookingControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CancelBookingControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CancelBookingControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
