import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Modalidadepisodionew1Component } from './modalidadepisodionew1.component';

describe('Modalidadepisodionew1Component', () => {
  let component: Modalidadepisodionew1Component;
  let fixture: ComponentFixture<Modalidadepisodionew1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Modalidadepisodionew1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Modalidadepisodionew1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
