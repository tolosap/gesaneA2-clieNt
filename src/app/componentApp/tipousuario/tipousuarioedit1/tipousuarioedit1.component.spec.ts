import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tipousuarioedit1Component } from './tipousuarioedit1.component';

describe('Tipousuarioedit1Component', () => {
  let component: Tipousuarioedit1Component;
  let fixture: ComponentFixture<Tipousuarioedit1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tipousuarioedit1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tipousuarioedit1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
