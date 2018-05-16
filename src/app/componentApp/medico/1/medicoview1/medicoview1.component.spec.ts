import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Medicoview1Component } from './medicoview1.component';

describe('Medicoview1Component', () => {
  let component: Medicoview1Component;
  let fixture: ComponentFixture<Medicoview1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Medicoview1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Medicoview1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
