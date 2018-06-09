import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Circunstanciasaltaplist1Component } from './circunstanciasaltaplist1.component';

describe('Circunstanciasaltaplist1Component', () => {
  let component: Circunstanciasaltaplist1Component;
  let fixture: ComponentFixture<Circunstanciasaltaplist1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Circunstanciasaltaplist1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Circunstanciasaltaplist1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
