import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Medicoplist1Component } from './medicoplist1.component';

describe('Medicoplist1Component', () => {
  let component: Medicoplist1Component;
  let fixture: ComponentFixture<Medicoplist1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Medicoplist1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Medicoplist1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
