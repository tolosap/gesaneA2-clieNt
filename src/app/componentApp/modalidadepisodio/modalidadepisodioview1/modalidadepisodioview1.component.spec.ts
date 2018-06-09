import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Modalidadepisodioview1Component } from './modalidadepisodioview1.component';

describe('Modalidadepisodioview1Component', () => {
  let component: Modalidadepisodioview1Component;
  let fixture: ComponentFixture<Modalidadepisodioview1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Modalidadepisodioview1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Modalidadepisodioview1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
