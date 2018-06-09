import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Especialidadremove1Component } from './especialidadremove1.component';

describe('Especialidadremove1Component', () => {
  let component: Especialidadremove1Component;
  let fixture: ComponentFixture<Especialidadremove1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Especialidadremove1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Especialidadremove1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
