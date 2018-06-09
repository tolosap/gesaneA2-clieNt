import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Destinoaltanew1Component } from './destinoaltanew1.component';

describe('Destinoaltanew1Component', () => {
  let component: Destinoaltanew1Component;
  let fixture: ComponentFixture<Destinoaltanew1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Destinoaltanew1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Destinoaltanew1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
