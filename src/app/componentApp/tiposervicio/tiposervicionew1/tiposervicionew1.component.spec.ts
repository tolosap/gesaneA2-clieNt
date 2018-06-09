import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tiposervicionew1Component } from './tiposervicionew1.component';

describe('Tiposervicionew1Component', () => {
  let component: Tiposervicionew1Component;
  let fixture: ComponentFixture<Tiposervicionew1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tiposervicionew1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tiposervicionew1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
