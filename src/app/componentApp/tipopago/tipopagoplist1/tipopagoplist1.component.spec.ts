import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tipopagoplist1Component } from './tipopagoplist1.component';

describe('Tipopagoplist1Component', () => {
  let component: Tipopagoplist1Component;
  let fixture: ComponentFixture<Tipopagoplist1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tipopagoplist1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tipopagoplist1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
