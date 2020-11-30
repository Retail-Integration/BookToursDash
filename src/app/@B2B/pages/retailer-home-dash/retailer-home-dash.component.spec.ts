import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetailerHomeDashComponent } from './retailer-home-dash.component';

describe('RetailerHomeDashComponent', () => {
  let component: RetailerHomeDashComponent;
  let fixture: ComponentFixture<RetailerHomeDashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetailerHomeDashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetailerHomeDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
