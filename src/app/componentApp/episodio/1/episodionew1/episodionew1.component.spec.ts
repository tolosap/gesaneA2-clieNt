import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Episodionew1Component } from './episodionew1.component';

describe('Episodionew1Component', () => {
  let component: Episodionew1Component;
  let fixture: ComponentFixture<Episodionew1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Episodionew1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Episodionew1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
