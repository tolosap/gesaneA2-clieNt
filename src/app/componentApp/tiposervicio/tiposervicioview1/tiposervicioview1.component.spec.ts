import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tiposervicioview1Component } from './tiposervicioview1.component';

describe('Tiposervicioview1Component', () => {
  let component: Tiposervicioview1Component;
  let fixture: ComponentFixture<Tiposervicioview1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tiposervicioview1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tiposervicioview1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
