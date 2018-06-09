import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tipousuarionew1Component } from './tipousuarionew1.component';

describe('Tipousuarionew1Component', () => {
  let component: Tipousuarionew1Component;
  let fixture: ComponentFixture<Tipousuarionew1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tipousuarionew1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tipousuarionew1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
