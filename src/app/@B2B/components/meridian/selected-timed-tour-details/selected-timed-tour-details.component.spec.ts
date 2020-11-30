import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedTimedTourDetailsComponent } from './selected-timed-tour-details.component';

describe('SelectedTimedTourDetailsComponent', () => {
  let component: SelectedTimedTourDetailsComponent;
  let fixture: ComponentFixture<SelectedTimedTourDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectedTimedTourDetailsComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedTimedTourDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
