import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Categoriaprofesionalnew1Component } from './categoriaprofesionalnew1.component';

describe('Categoriaprofesionalnew1Component', () => {
  let component: Categoriaprofesionalnew1Component;
  let fixture: ComponentFixture<Categoriaprofesionalnew1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Categoriaprofesionalnew1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Categoriaprofesionalnew1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
