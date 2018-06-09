import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tipodependencianew1Component } from './tipodependencianew1.component';

describe('Tipodependencianew1Component', () => {
  let component: Tipodependencianew1Component;
  let fixture: ComponentFixture<Tipodependencianew1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tipodependencianew1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tipodependencianew1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
