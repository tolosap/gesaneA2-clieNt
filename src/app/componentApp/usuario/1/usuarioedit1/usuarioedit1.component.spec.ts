import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Usuarioedit1Component } from './usuarioedit1.component';

describe('Usuarioedit1Component', () => {
  let component: Usuarioedit1Component;
  let fixture: ComponentFixture<Usuarioedit1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Usuarioedit1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Usuarioedit1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
