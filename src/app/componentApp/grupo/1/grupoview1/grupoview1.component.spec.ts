import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Grupoview1Component } from './grupoview1.component';

describe('Grupoview1Component', () => {
  let component: Grupoview1Component;
  let fixture: ComponentFixture<Grupoview1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Grupoview1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Grupoview1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
