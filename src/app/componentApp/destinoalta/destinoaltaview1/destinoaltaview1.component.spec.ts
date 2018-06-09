import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Destinoaltaview1Component } from './destinoaltaview1.component';

describe('Destinoaltaview1Component', () => {
  let component: Destinoaltaview1Component;
  let fixture: ComponentFixture<Destinoaltaview1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Destinoaltaview1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Destinoaltaview1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
