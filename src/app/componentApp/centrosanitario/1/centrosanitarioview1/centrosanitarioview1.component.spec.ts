import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Centrosanitarioview1Component } from './centrosanitarioview1.component';

describe('Centrosanitarioview1Component', () => {
  let component: Centrosanitarioview1Component;
  let fixture: ComponentFixture<Centrosanitarioview1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Centrosanitarioview1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Centrosanitarioview1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
