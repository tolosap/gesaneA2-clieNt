import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Gruponew1Component } from './gruponew1.component';

describe('Gruponew1Component', () => {
  let component: Gruponew1Component;
  let fixture: ComponentFixture<Gruponew1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Gruponew1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Gruponew1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
