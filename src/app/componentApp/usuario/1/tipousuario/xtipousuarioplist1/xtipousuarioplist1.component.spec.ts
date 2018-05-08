import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Xtipousuarioplist1Component } from './xtipousuarioplist1.component';

describe('Xtipousuarioplist1Component', () => {
  let component: Xtipousuarioplist1Component;
  let fixture: ComponentFixture<Xtipousuarioplist1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Xtipousuarioplist1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Xtipousuarioplist1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
