import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tipodependenciaremove1Component } from './tipodependenciaremove1.component';

describe('Tipodependenciaremove1Component', () => {
  let component: Tipodependenciaremove1Component;
  let fixture: ComponentFixture<Tipodependenciaremove1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tipodependenciaremove1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tipodependenciaremove1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
