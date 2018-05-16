import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Mediconew1Component } from './mediconew1.component';

describe('Mediconew1Component', () => {
  let component: Mediconew1Component;
  let fixture: ComponentFixture<Mediconew1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mediconew1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mediconew1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
