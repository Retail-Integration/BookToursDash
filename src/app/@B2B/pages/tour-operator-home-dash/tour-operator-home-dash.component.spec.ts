import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TourOperatorHomeDashComponent } from './tour-operator-home-dash.component';

describe('TourOperatorHomeDashComponent', () => {
  let component: TourOperatorHomeDashComponent;
  let fixture: ComponentFixture<TourOperatorHomeDashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TourOperatorHomeDashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TourOperatorHomeDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
