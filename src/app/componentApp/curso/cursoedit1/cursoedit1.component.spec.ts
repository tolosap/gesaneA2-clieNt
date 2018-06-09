import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cursoedit1Component } from './cursoedit1.component';

describe('Cursoedit1Component', () => {
  let component: Cursoedit1Component;
  let fixture: ComponentFixture<Cursoedit1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cursoedit1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cursoedit1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
