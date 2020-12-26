import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccHistoryComponent } from './acc-history.component';

describe('AccHistoryComponent', () => {
  let component: AccHistoryComponent;
  let fixture: ComponentFixture<AccHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
