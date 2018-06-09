import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tipoepisodioview1Component } from './tipoepisodioview1.component';

describe('Tipoepisodioview1Component', () => {
  let component: Tipoepisodioview1Component;
  let fixture: ComponentFixture<Tipoepisodioview1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tipoepisodioview1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tipoepisodioview1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
