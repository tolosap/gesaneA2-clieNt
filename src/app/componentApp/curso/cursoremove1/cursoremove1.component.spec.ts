import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cursoremove1Component } from './cursoremove1.component';

describe('Cursoremove1Component', () => {
  let component: Cursoremove1Component;
  let fixture: ComponentFixture<Cursoremove1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cursoremove1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cursoremove1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
