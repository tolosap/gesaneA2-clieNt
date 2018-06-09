import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Dependenciaview1Component } from './dependenciaview1.component';

describe('Dependenciaview1Component', () => {
  let component: Dependenciaview1Component;
  let fixture: ComponentFixture<Dependenciaview1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dependenciaview1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dependenciaview1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
