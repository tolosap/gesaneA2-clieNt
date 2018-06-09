import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Dependenciaedit1Component } from './dependenciaedit1.component';

describe('Dependenciaedit1Component', () => {
  let component: Dependenciaedit1Component;
  let fixture: ComponentFixture<Dependenciaedit1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dependenciaedit1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dependenciaedit1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
