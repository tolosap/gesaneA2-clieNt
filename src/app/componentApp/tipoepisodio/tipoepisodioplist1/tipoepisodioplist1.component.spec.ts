import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tipoepisodioplist1Component } from './tipoepisodioplist1.component';

describe('Tipoepisodioplist1Component', () => {
  let component: Tipoepisodioplist1Component;
  let fixture: ComponentFixture<Tipoepisodioplist1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tipoepisodioplist1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tipoepisodioplist1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
