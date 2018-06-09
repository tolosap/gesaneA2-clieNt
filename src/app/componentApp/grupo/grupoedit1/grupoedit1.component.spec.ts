import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Grupoedit1Component } from './grupoedit1.component';

describe('Grupoedit1Component', () => {
  let component: Grupoedit1Component;
  let fixture: ComponentFixture<Grupoedit1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Grupoedit1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Grupoedit1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
