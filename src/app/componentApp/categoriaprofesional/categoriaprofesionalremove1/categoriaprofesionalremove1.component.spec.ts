import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Categoriaprofesionalremove1Component } from './categoriaprofesionalremove1.component';

describe('Categoriaprofesionalremove1Component', () => {
  let component: Categoriaprofesionalremove1Component;
  let fixture: ComponentFixture<Categoriaprofesionalremove1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Categoriaprofesionalremove1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Categoriaprofesionalremove1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
