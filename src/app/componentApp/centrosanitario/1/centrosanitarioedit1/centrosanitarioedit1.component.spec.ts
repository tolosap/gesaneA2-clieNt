import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Centrosanitarioedit1Component } from './centrosanitarioedit1.component';

describe('Centrosanitarioedit1Component', () => {
  let component: Centrosanitarioedit1Component;
  let fixture: ComponentFixture<Centrosanitarioedit1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Centrosanitarioedit1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Centrosanitarioedit1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
