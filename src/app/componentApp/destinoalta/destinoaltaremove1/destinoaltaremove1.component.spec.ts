import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Destinoaltaremove1Component } from './destinoaltaremove1.component';

describe('Destinoaltaremove1Component', () => {
  let component: Destinoaltaremove1Component;
  let fixture: ComponentFixture<Destinoaltaremove1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Destinoaltaremove1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Destinoaltaremove1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
