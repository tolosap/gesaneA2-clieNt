import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Servicioplist1Component } from './servicioplist1.component';

describe('Servicioplist1Component', () => {
  let component: Servicioplist1Component;
  let fixture: ComponentFixture<Servicioplist1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Servicioplist1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Servicioplist1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
