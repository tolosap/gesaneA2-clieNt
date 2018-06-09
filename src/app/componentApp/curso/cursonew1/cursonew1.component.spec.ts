import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cursonew1Component } from './cursonew1.component';

describe('Cursonew1Component', () => {
  let component: Cursonew1Component;
  let fixture: ComponentFixture<Cursonew1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cursonew1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cursonew1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
