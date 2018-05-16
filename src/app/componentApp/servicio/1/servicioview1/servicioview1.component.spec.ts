import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Servicioview1Component } from './servicioview1.component';

describe('Servicioview1Component', () => {
  let component: Servicioview1Component;
  let fixture: ComponentFixture<Servicioview1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Servicioview1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Servicioview1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
