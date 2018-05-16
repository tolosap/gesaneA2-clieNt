import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sexoplist1Component } from './sexoplist1.component';

describe('Sexoplist1Component', () => {
  let component: Sexoplist1Component;
  let fixture: ComponentFixture<Sexoplist1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sexoplist1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sexoplist1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
