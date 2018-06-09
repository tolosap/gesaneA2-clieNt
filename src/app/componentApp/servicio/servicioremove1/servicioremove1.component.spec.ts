import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Servicioremove1Component } from './servicioremove1.component';

describe('Servicioremove1Component', () => {
  let component: Servicioremove1Component;
  let fixture: ComponentFixture<Servicioremove1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Servicioremove1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Servicioremove1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
