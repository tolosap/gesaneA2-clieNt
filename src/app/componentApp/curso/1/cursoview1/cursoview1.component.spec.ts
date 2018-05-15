import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cursoview1Component } from './cursoview1.component';

describe('Cursoview1Component', () => {
  let component: Cursoview1Component;
  let fixture: ComponentFixture<Cursoview1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cursoview1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cursoview1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
