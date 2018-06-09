import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Facturanew1Component } from './facturanew1.component';

describe('Facturanew1Component', () => {
  let component: Facturanew1Component;
  let fixture: ComponentFixture<Facturanew1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Facturanew1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Facturanew1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
