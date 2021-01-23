import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IcrAppComponent } from './icr-app.component';

describe('IcrAppComponent', () => {
  let component: IcrAppComponent;
  let fixture: ComponentFixture<IcrAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IcrAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IcrAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
