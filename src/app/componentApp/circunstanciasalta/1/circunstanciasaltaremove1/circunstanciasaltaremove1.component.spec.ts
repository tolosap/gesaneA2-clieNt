import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Circunstanciasaltaremove1Component } from './circunstanciasaltaremove1.component';

describe('Circunstanciasaltaremove1Component', () => {
  let component: Circunstanciasaltaremove1Component;
  let fixture: ComponentFixture<Circunstanciasaltaremove1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Circunstanciasaltaremove1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Circunstanciasaltaremove1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
