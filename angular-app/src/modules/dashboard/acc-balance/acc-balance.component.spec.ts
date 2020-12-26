import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccBalanceComponent } from './acc-balance.component';

describe('AccBalanceComponent', () => {
  let component: AccBalanceComponent;
  let fixture: ComponentFixture<AccBalanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccBalanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccBalanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
