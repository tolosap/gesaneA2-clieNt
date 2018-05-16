import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tipodependenciaedit1Component } from './tipodependenciaedit1.component';

describe('Tipodependenciaedit1Component', () => {
  let component: Tipodependenciaedit1Component;
  let fixture: ComponentFixture<Tipodependenciaedit1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tipodependenciaedit1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tipodependenciaedit1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
