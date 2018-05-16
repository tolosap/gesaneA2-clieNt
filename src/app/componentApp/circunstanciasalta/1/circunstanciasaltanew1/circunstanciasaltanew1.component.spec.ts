import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Circunstanciasaltanew1Component } from './circunstanciasaltanew1.component';

describe('Circunstanciasaltanew1Component', () => {
  let component: Circunstanciasaltanew1Component;
  let fixture: ComponentFixture<Circunstanciasaltanew1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Circunstanciasaltanew1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Circunstanciasaltanew1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
