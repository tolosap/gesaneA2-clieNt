import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tiposervicioremove1Component } from './tiposervicioremove1.component';

describe('Tiposervicioremove1Component', () => {
  let component: Tiposervicioremove1Component;
  let fixture: ComponentFixture<Tiposervicioremove1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tiposervicioremove1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tiposervicioremove1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
