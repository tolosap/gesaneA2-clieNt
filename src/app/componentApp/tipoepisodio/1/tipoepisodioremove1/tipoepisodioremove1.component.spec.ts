import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tipoepisodioremove1Component } from './tipoepisodioremove1.component';

describe('Tipoepisodioremove1Component', () => {
  let component: Tipoepisodioremove1Component;
  let fixture: ComponentFixture<Tipoepisodioremove1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tipoepisodioremove1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tipoepisodioremove1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
