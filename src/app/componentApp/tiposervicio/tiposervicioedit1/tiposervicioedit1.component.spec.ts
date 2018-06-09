import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tiposervicioedit1Component } from './tiposervicioedit1.component';

describe('Tiposervicioedit1Component', () => {
  let component: Tiposervicioedit1Component;
  let fixture: ComponentFixture<Tiposervicioedit1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tiposervicioedit1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tiposervicioedit1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
