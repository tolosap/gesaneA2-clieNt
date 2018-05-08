import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Usuarionew1Component } from './usuarionew1.component';

describe('Usuarionew1Component', () => {
  let component: Usuarionew1Component;
  let fixture: ComponentFixture<Usuarionew1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Usuarionew1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Usuarionew1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
