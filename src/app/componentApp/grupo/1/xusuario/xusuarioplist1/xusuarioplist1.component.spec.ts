import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Xusuarioplist1Component } from './xusuarioplist1.component';

describe('Xusuarioplist1Component', () => {
  let component: Xusuarioplist1Component;
  let fixture: ComponentFixture<Xusuarioplist1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Xusuarioplist1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Xusuarioplist1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
