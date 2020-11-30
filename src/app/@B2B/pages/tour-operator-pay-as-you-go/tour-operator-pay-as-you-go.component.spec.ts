import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TourOperatorPayAsYouGoComponent } from './tour-operator-pay-as-you-go.component';

describe('TourOperatorPayAsYouGoComponent', () => {
  let component: TourOperatorPayAsYouGoComponent;
  let fixture: ComponentFixture<TourOperatorPayAsYouGoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TourOperatorPayAsYouGoComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TourOperatorPayAsYouGoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
