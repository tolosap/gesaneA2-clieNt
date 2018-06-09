import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Categoriaprofesionalplist1Component } from './categoriaprofesionalplist1.component';

describe('Categoriaprofesionalplist1Component', () => {
  let component: Categoriaprofesionalplist1Component;
  let fixture: ComponentFixture<Categoriaprofesionalplist1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Categoriaprofesionalplist1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Categoriaprofesionalplist1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
