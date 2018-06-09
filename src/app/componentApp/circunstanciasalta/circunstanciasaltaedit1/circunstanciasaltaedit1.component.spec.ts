import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Circunstanciasaltaedit1Component } from './circunstanciasaltaedit1.component';

describe('Circunstanciasaltaedit1Component', () => {
  let component: Circunstanciasaltaedit1Component;
  let fixture: ComponentFixture<Circunstanciasaltaedit1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Circunstanciasaltaedit1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Circunstanciasaltaedit1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
