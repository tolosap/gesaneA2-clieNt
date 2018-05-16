import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tipopagoview1Component } from './tipopagoview1.component';

describe('Tipopagoview1Component', () => {
  let component: Tipopagoview1Component;
  let fixture: ComponentFixture<Tipopagoview1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tipopagoview1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tipopagoview1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
