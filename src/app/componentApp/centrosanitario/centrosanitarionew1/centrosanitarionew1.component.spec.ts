import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Centrosanitarionew1Component } from './centrosanitarionew1.component';

describe('Centrosanitarionew1Component', () => {
  let component: Centrosanitarionew1Component;
  let fixture: ComponentFixture<Centrosanitarionew1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Centrosanitarionew1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Centrosanitarionew1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
