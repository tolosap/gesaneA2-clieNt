import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tipopagoedit1Component } from './tipopagoedit1.component';

describe('Tipopagoedit1Component', () => {
  let component: Tipopagoedit1Component;
  let fixture: ComponentFixture<Tipopagoedit1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tipopagoedit1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tipopagoedit1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
