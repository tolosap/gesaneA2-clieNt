import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Especialidadview1Component } from './especialidadview1.component';

describe('Especialidadview1Component', () => {
  let component: Especialidadview1Component;
  let fixture: ComponentFixture<Especialidadview1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Especialidadview1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Especialidadview1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
