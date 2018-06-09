import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tipopagonew1Component } from './tipopagonew1.component';

describe('Tipopagonew1Component', () => {
  let component: Tipopagonew1Component;
  let fixture: ComponentFixture<Tipopagonew1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tipopagonew1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tipopagonew1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
