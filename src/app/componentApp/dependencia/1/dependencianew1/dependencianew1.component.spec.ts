import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Dependencianew1Component } from './dependencianew1.component';

describe('Dependencianew1Component', () => {
  let component: Dependencianew1Component;
  let fixture: ComponentFixture<Dependencianew1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dependencianew1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dependencianew1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
