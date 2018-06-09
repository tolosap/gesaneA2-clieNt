import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Categoriaprofesionaledit1Component } from './categoriaprofesionaledit1.component';

describe('Categoriaprofesionaledit1Component', () => {
  let component: Categoriaprofesionaledit1Component;
  let fixture: ComponentFixture<Categoriaprofesionaledit1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Categoriaprofesionaledit1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Categoriaprofesionaledit1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
