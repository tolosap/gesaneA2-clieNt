import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Medicoremove1Component } from './medicoremove1.component';

describe('Medicoremove1Component', () => {
  let component: Medicoremove1Component;
  let fixture: ComponentFixture<Medicoremove1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Medicoremove1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Medicoremove1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
