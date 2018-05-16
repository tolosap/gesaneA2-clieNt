import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tipoepisodionew1Component } from './tipoepisodionew1.component';

describe('Tipoepisodionew1Component', () => {
  let component: Tipoepisodionew1Component;
  let fixture: ComponentFixture<Tipoepisodionew1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tipoepisodionew1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tipoepisodionew1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
