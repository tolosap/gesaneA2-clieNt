import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Episodioedit1Component } from './episodioedit1.component';

describe('Episodioedit1Component', () => {
  let component: Episodioedit1Component;
  let fixture: ComponentFixture<Episodioedit1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Episodioedit1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Episodioedit1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
