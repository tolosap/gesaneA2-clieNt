import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Facturaremove1Component } from './facturaremove1.component';

describe('Facturaremove1Component', () => {
  let component: Facturaremove1Component;
  let fixture: ComponentFixture<Facturaremove1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Facturaremove1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Facturaremove1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
