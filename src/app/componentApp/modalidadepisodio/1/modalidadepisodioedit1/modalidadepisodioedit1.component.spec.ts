import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Modalidadepisodioedit1Component } from './modalidadepisodioedit1.component';

describe('Modalidadepisodioedit1Component', () => {
  let component: Modalidadepisodioedit1Component;
  let fixture: ComponentFixture<Modalidadepisodioedit1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Modalidadepisodioedit1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Modalidadepisodioedit1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
