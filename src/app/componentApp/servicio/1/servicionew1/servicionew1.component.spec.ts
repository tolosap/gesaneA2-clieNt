import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Servicionew1Component } from './servicionew1.component';

describe('Servicionew1Component', () => {
  let component: Servicionew1Component;
  let fixture: ComponentFixture<Servicionew1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Servicionew1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Servicionew1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
