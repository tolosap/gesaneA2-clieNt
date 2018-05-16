import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Facturaview1Component } from './facturaview1.component';

describe('Facturaview1Component', () => {
  let component: Facturaview1Component;
  let fixture: ComponentFixture<Facturaview1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Facturaview1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Facturaview1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
