import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingControlComponent } from './booking-control.component';

describe('BookingControlComponent', () => {
  let component: BookingControlComponent;
  let fixture: ComponentFixture<BookingControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingControlComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
