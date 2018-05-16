import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Dependenciaremove1Component } from './dependenciaremove1.component';

describe('Dependenciaremove1Component', () => {
  let component: Dependenciaremove1Component;
  let fixture: ComponentFixture<Dependenciaremove1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dependenciaremove1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dependenciaremove1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
