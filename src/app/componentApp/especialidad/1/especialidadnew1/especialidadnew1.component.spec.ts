import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Especialidadnew1Component } from './especialidadnew1.component';

describe('Especialidadnew1Component', () => {
  let component: Especialidadnew1Component;
  let fixture: ComponentFixture<Especialidadnew1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Especialidadnew1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Especialidadnew1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
