import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBookingControlComponent } from './edit-booking-control.component';

describe('EditBookingControlComponent', () => {
  let component: EditBookingControlComponent;
  let fixture: ComponentFixture<EditBookingControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditBookingControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditBookingControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
