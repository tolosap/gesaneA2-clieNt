import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Centronew1Component } from './centronew1.component';

describe('Centronew1Component', () => {
  let component: Centronew1Component;
  let fixture: ComponentFixture<Centronew1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Centronew1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Centronew1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
