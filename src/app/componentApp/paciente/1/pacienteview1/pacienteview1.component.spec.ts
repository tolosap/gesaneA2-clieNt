import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pacienteview1Component } from './pacienteview1.component';

describe('Pacienteview1Component', () => {
  let component: Pacienteview1Component;
  let fixture: ComponentFixture<Pacienteview1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pacienteview1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pacienteview1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
