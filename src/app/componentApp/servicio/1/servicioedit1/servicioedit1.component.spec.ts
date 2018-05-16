import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Servicioedit1Component } from './servicioedit1.component';

describe('Servicioedit1Component', () => {
  let component: Servicioedit1Component;
  let fixture: ComponentFixture<Servicioedit1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Servicioedit1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Servicioedit1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
