import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Especialidadedit1Component } from './especialidadedit1.component';

describe('Especialidadedit1Component', () => {
  let component: Especialidadedit1Component;
  let fixture: ComponentFixture<Especialidadedit1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Especialidadedit1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Especialidadedit1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
