import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sexonew1Component } from './sexonew1.component';

describe('Sexonew1Component', () => {
  let component: Sexonew1Component;
  let fixture: ComponentFixture<Sexonew1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sexonew1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sexonew1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
