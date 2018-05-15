import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Xusuarioedit1Component } from './xusuarioedit1.component';

describe('Xusuarioedit1Component', () => {
  let component: Xusuarioedit1Component;
  let fixture: ComponentFixture<Xusuarioedit1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Xusuarioedit1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Xusuarioedit1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
