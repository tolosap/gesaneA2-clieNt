import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pacienteplist1Component } from './pacienteplist1.component';

describe('Pacienteplist1Component', () => {
  let component: Pacienteplist1Component;
  let fixture: ComponentFixture<Pacienteplist1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pacienteplist1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pacienteplist1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
