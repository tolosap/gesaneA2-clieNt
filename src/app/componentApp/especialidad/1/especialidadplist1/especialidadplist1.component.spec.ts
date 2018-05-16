import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Especialidadplist1Component } from './especialidadplist1.component';

describe('Especialidadplist1Component', () => {
  let component: Especialidadplist1Component;
  let fixture: ComponentFixture<Especialidadplist1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Especialidadplist1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Especialidadplist1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
