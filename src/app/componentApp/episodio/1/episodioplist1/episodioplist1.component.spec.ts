import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Episodioplist1Component } from './episodioplist1.component';

describe('Episodioplist1Component', () => {
  let component: Episodioplist1Component;
  let fixture: ComponentFixture<Episodioplist1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Episodioplist1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Episodioplist1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
