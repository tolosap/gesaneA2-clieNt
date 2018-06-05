import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pacientenew1Component } from './pacientenew1.component';

describe('Pacientenew1Component', () => {
  let component: Pacientenew1Component;
  let fixture: ComponentFixture<Pacientenew1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pacientenew1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pacientenew1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
