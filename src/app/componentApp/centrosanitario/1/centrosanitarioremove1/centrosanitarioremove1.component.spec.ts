import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Centrosanitarioremove1Component } from './centrosanitarioremove1.component';

describe('Centrosanitarioremove1Component', () => {
  let component: Centrosanitarioremove1Component;
  let fixture: ComponentFixture<Centrosanitarioremove1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Centrosanitarioremove1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Centrosanitarioremove1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
