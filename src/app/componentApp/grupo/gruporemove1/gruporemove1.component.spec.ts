import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Gruporemove1Component } from './gruporemove1.component';

describe('Gruporemove1Component', () => {
  let component: Gruporemove1Component;
  let fixture: ComponentFixture<Gruporemove1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Gruporemove1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Gruporemove1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
