import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Categoriaprofesionalview1Component } from './categoriaprofesionalview1.component';

describe('Categoriaprofesionalview1Component', () => {
  let component: Categoriaprofesionalview1Component;
  let fixture: ComponentFixture<Categoriaprofesionalview1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Categoriaprofesionalview1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Categoriaprofesionalview1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
