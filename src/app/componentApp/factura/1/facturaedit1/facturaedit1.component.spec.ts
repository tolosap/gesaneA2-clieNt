import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Facturaedit1Component } from './facturaedit1.component';

describe('Facturaedit1Component', () => {
  let component: Facturaedit1Component;
  let fixture: ComponentFixture<Facturaedit1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Facturaedit1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Facturaedit1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
