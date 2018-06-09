import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Circunstanciasaltaview1Component } from './circunstanciasaltaview1.component';

describe('Circunstanciasaltaview1Component', () => {
  let component: Circunstanciasaltaview1Component;
  let fixture: ComponentFixture<Circunstanciasaltaview1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Circunstanciasaltaview1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Circunstanciasaltaview1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
