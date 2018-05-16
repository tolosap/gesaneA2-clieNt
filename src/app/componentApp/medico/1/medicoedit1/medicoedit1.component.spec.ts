import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Medicoedit1Component } from './medicoedit1.component';

describe('Medicoedit1Component', () => {
  let component: Medicoedit1Component;
  let fixture: ComponentFixture<Medicoedit1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Medicoedit1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Medicoedit1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
