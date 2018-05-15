import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Centroview1Component } from './centroview1.component';

describe('Centroview1Component', () => {
  let component: Centroview1Component;
  let fixture: ComponentFixture<Centroview1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Centroview1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Centroview1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
