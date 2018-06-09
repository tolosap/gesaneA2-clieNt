import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Grupoplist1Component } from './grupoplist1.component';

describe('Grupoplist1Component', () => {
  let component: Grupoplist1Component;
  let fixture: ComponentFixture<Grupoplist1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Grupoplist1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Grupoplist1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
