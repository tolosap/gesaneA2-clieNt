import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Usuarioremove1Component } from './usuarioremove1.component';

describe('Usuarioremove1Component', () => {
  let component: Usuarioremove1Component;
  let fixture: ComponentFixture<Usuarioremove1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Usuarioremove1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Usuarioremove1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
