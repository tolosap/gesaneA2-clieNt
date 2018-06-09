import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Usuarioview1Component } from './usuarioview1.component';

describe('Usuarioview1Component', () => {
  let component: Usuarioview1Component;
  let fixture: ComponentFixture<Usuarioview1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Usuarioview1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Usuarioview1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
