import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Centrosanitarioplist1Component } from './centrosanitarioplist1.component';

describe('Centrosanitarioplist1Component', () => {
  let component: Centrosanitarioplist1Component;
  let fixture: ComponentFixture<Centrosanitarioplist1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Centrosanitarioplist1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Centrosanitarioplist1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
