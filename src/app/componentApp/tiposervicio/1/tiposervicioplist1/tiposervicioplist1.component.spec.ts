import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tiposervicioplist1Component } from './tiposervicioplist1.component';

describe('Tiposervicioplist1Component', () => {
  let component: Tiposervicioplist1Component;
  let fixture: ComponentFixture<Tiposervicioplist1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tiposervicioplist1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tiposervicioplist1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
