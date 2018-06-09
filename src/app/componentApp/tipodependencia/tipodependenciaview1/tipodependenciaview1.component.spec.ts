import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tipodependenciaview1Component } from './tipodependenciaview1.component';

describe('Tipodependenciaview1Component', () => {
  let component: Tipodependenciaview1Component;
  let fixture: ComponentFixture<Tipodependenciaview1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tipodependenciaview1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tipodependenciaview1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
