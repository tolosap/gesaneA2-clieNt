import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Xusuarionew1Component } from './xusuarionew1.component';

describe('Xusuarionew1Component', () => {
  let component: Xusuarionew1Component;
  let fixture: ComponentFixture<Xusuarionew1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Xusuarionew1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Xusuarionew1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
