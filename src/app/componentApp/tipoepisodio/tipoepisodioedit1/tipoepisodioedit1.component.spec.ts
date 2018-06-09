import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tipoepisodioedit1Component } from './tipoepisodioedit1.component';

describe('Tipoepisodioedit1Component', () => {
  let component: Tipoepisodioedit1Component;
  let fixture: ComponentFixture<Tipoepisodioedit1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tipoepisodioedit1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tipoepisodioedit1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
