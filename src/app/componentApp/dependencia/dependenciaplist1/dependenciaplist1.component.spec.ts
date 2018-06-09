import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Dependenciaplist1Component } from './dependenciaplist1.component';

describe('Dependenciaplist1Component', () => {
  let component: Dependenciaplist1Component;
  let fixture: ComponentFixture<Dependenciaplist1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dependenciaplist1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dependenciaplist1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
