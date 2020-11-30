import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingsCalanderComponent } from './bookings-calander.component';

describe('BookingsCalanderComponent', () => {
  let component: BookingsCalanderComponent;
  let fixture: ComponentFixture<BookingsCalanderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingsCalanderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingsCalanderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
