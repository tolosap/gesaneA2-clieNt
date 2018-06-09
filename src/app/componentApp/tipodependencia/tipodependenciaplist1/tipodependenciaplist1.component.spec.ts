import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tipodependenciaplist1Component } from './tipodependenciaplist1.component';

describe('Tipodependenciaplist1Component', () => {
  let component: Tipodependenciaplist1Component;
  let fixture: ComponentFixture<Tipodependenciaplist1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tipodependenciaplist1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tipodependenciaplist1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
