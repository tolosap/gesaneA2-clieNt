import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sexoedit1Component } from './sexoedit1.component';

describe('Sexoedit1Component', () => {
  let component: Sexoedit1Component;
  let fixture: ComponentFixture<Sexoedit1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sexoedit1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sexoedit1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
