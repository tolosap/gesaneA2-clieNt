import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Modalidadepisodioplist1Component } from './modalidadepisodioplist1.component';

describe('Modalidadepisodioplist1Component', () => {
  let component: Modalidadepisodioplist1Component;
  let fixture: ComponentFixture<Modalidadepisodioplist1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Modalidadepisodioplist1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Modalidadepisodioplist1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
