import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Centroedit1Component } from './centroedit1.component';

describe('Centroedit1Component', () => {
  let component: Centroedit1Component;
  let fixture: ComponentFixture<Centroedit1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Centroedit1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Centroedit1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
