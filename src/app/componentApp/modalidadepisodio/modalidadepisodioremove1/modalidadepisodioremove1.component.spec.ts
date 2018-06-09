import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Modalidadepisodioremove1Component } from './modalidadepisodioremove1.component';

describe('Modalidadepisodioremove1Component', () => {
  let component: Modalidadepisodioremove1Component;
  let fixture: ComponentFixture<Modalidadepisodioremove1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Modalidadepisodioremove1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Modalidadepisodioremove1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
