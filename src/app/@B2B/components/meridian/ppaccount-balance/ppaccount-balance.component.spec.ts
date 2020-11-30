import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PPAccountBalanceComponent } from './ppaccount-balance.component';

describe('PPAccountBalanceComponent', () => {
  let component: PPAccountBalanceComponent;
  let fixture: ComponentFixture<PPAccountBalanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PPAccountBalanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PPAccountBalanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
