import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Facturaplist1Component } from './facturaplist1.component';

describe('Facturaplist1Component', () => {
  let component: Facturaplist1Component;
  let fixture: ComponentFixture<Facturaplist1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Facturaplist1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Facturaplist1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
