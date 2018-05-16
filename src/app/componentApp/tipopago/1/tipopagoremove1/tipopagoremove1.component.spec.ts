import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tipopagoremove1Component } from './tipopagoremove1.component';

describe('Tipopagoremove1Component', () => {
  let component: Tipopagoremove1Component;
  let fixture: ComponentFixture<Tipopagoremove1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tipopagoremove1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tipopagoremove1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
